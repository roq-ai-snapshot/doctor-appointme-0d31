import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  specialization: string;
  license_number: string;
  experience_years: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialization?: string;
  license_number?: string;
  user_id?: string;
}
