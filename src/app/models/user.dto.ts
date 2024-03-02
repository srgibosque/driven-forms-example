export class UserDTO{
  email: string;
  password: string;
  name?: string;
  surname?: string;
  alias?: string;
  birth?: Date;

  constructor(email: string, password: string, name?: string, surname?: string, alias?: string, birth?: Date){
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.alias = alias;
    this.birth = birth;
  }

}