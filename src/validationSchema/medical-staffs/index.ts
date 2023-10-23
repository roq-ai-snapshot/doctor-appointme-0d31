import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  position: yup.string().required(),
  work_hours: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
