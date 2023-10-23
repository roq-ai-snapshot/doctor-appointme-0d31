import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalStaffInterface {
  id?: string;
  position: string;
  work_hours: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MedicalStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  work_hours?: string;
  user_id?: string;
}
