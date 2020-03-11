export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  role: string;

  constructor(username: string, password: string, email: string, created_at: Date, updated_at: Date, deleted_at: Date) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
