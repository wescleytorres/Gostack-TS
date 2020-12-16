import { Request, Response } from 'express'
import createUser from './Services/CreateUser'

// APRENDENDO SOBRE
// TIPAGEM -> string, number, boolean, object, Array
// Interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'jean.torres@abc.com',
    password: '123456',
    techs: [
      'ReactJS',
      'React Native',
      'Node JS',
    ]
  });

  return response.json({ message: 'Hello World' });
}