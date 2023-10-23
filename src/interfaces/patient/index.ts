import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  dob: any;
  gender: string;
  medical_history?: string;
  allergies?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  gender?: string;
  medical_history?: string;
  allergies?: string;
  user_id?: string;
}
