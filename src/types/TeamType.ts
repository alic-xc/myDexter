export interface ITeamMember {
  domain?: string;
  full_name?: string;
  role: string;
  status: string;
  lastLogin?: string;
  _id?: string;
}

interface IFoundUser {
  _id: string;
  password: string;
  full_name: string;
  company_name: string;
  company_email_address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  monitored_query_users: string[];
  team_members: ITeamMember[];
}

export interface ITeamResponse {
  success: boolean;
  foundUser: IFoundUser;
}
