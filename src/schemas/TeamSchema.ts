import * as Yup from "yup";

const TeamSchema = Yup.object().shape({
  email: Yup.string().required("Select user email"),
  role: Yup.string().required("Select user role"),
});

export default TeamSchema;
