import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is requied")
    .min(3, "Enter a minimum of 3 characters")
    .max(128, "Enter a maximum of 128 characters")
    .matches(
      /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
      "Only alphabetic characters and a single space between words are allowed"
    ),
  email: Yup.string().required("Email is requied").email("Enter a valid email"),
  password: Yup.string().min(8).required("Password is required"),
  isAcceptTerms: Yup.boolean()
    .oneOf([true], "Kindly accept the terms and conditions to proceed.")
    .required("Kindly accept the terms and conditions to proceed."),
});

export const CompanyRegistrationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is requied")
    .min(3, "Enter a minimum of 3 characters")
    .max(128, "Enter a maximum of 128 characters")
    .matches(
      /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
      "Only alphabetic characters and a single space between words are allowed"
    ),
  companyName: Yup.string()
    .required("Company name is requied")
    .min(2, "Enter a minimum of 3 characters"),
  email: Yup.string().required("Email is requied").email("Enter a valid email"),
  password: Yup.string().min(8).required("Password is required"),
  isAcceptTerms: Yup.boolean()
    .oneOf([true], "Kindly accept the terms and conditions to proceed.")
    .required("Kindly accept the terms and conditions to proceed."),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is requied").email("Enter a valid email"),
  password: Yup.string().min(8).required("Password is required"),
});

export const OTPSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is requied")
    .min(6, "OTP must be 6 character")
    .max(6, "OTP must be 6 character"),
});

export const ForgotPasswordOTPSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is requied")
    .min(4, "OTP must be 4 character")
    .max(4, "OTP must be 4 character"),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required("Email is requied").email("Enter a valid email"),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Minimum of 8 characters")
    .required("Password is requied"),
  confirmPassword: Yup.string()
    .min(8, "Minimum of 8 characters")
    .required("Confirm Password is required"),
});
