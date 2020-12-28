//=> PRIMEIRO EXEMPLO
    api.get(`repos/${params.repository}`).then(response => {
      console.log(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      console.log(response.data);
    });

//=> SEGUNDO EXEMPLO
    async function loadData(): Promise<void> {
      const repository = await api.get(`repos/${params.repository}`);
      const issues = await api.get(`repos/${params.repository}/issues`);

      console.log(repository);
      console.log(issues);
    }

//=> TERCEIRO EXEMPLO
    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      console.log(repository);
      console.log(issues);
    }
    loadData();
