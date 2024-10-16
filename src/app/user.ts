export class User {
  username: string;
  password:string;
  user_id: number;
  first_name: string;
  last_name: string;
  permissions: string[] = [];
  constructor(user_id: number, first_name: string,last_name: string,username:string,  password: string, permissions: string[]) {
    this.username = username;
    this.password = password;
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.permissions = permissions;
  }
  
}
