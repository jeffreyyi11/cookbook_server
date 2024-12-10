export interface UserInterface {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  passwordHash: string;
  friends?: [];
  recipes?: [];
}

export type NewUser = Omit<UserInterface, 'id'>;