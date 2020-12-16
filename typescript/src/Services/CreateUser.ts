/**
 * Para criar: name, email, password
 * 
 * |> Interface: define os tipos de conjunto de informações, geralmente um Obj
 */

 interface TechObject {
   title: string;
   experience: number;
 }

interface CreateUserData {
  // ? = opcional
  name?: string;
  email: string;
  password: string;
  // formato para tipo unico String[] || formato para tipo variavel Array<String | TechObject>
  techs: Array<String | TechObject>;
}


export default function createUser({ name, email, password }: CreateUserData ) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}