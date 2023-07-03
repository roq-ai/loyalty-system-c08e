import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  invited_user_id: yup.string().nullable(),
  inviting_user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
