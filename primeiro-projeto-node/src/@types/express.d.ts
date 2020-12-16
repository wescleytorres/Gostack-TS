// adiciona mais um componente no Request

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
