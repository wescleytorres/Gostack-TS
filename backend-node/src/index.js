const express = require('express')
const cors = require('cors');
const { v4: uuid_v4, validate: isUuid } = require('uuid');

// o uuidv4 esta em desconstinuação, no forum contem essa solução.

const app = express();

app.use(cors());
app.use(express.json());


const projects = [];

function logRequests(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  next(); // Proximo middleware

}

function validadeProjectId(req, res, next) {
  const { id } = req.params;

  // primeira condição para ver se o id é valido
  if (!isUuid(id)) {
    return res.status(400).json({ error: 'Invalid project ID.' })
  }

  return next();
}

// uma forma ate mais limpa é passar o middleware utilizando o .use()
// app.use(logRequests);
// app.use('/projects/:id', validadeProjectId);

// uma forma de usar o middleware é passando ele direto no outro 

app.get('/projects', logRequests, (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return res.json(results);
})

app.post('/projects', logRequests, (req, res) => {

  const { title, owner } = req.body;

  const project = { id: uuid_v4(), title, owner };

  projects.push(project);

  return res.json(project);
})

app.put('/projects/:id', logRequests, validadeProjectId, (req, res) => {

  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  // segunda condição para ver se existe o ID
  if (projectIndex < 0) {
    return res.status(404).json({ error: "Project not found." })
  }

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return res.json(project);
})

app.delete('/projects/:id', logRequests, validadeProjectId, (req, res) => {

  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  // segunda condição para ver se existe o ID.
  if (projectIndex < 0) {
    return res.status(404).json({ error: "Project not found." })
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
})

app.listen(3333, () => {
  console.log('Back-end started!')
});

