import * as Yup from "yup";

const AlertFormSchema = Yup.object().shape({
  alertChannel: Yup.object().shape({
    emailAlert: Yup.boolean(),
    smsAlert: Yup.boolean(),
    inAppAlert: Yup.boolean(),
  }),
  emailPreference: Yup.string().required("Select an email preference"),
  severity: Yup.string().required("Select an severity "),
});

export default AlertFormSchema;
