import * as Yup from "yup";

export const DomainSchema = Yup.object().shape({
  domain: Yup.string()
    .required("Full name is requied")
    .min(3, "Enter a minimum of 3 characters")
    .matches(
      /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/i,
      "Enter a valid domain name"
    ),
});

export const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is requied")
    .min(3, "Enter a minimum of 3 characters")
    .email("Enter a valid Email"),
});
