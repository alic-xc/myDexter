import * as Yup from "yup";

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, "Current password must be at least 8 characters")
    .required("Current password is required"),

  newPassword: Yup.string()
    .min(8, "New password must be at least 8 characters")
    .required("New password is required")
    .notOneOf(
      [Yup.ref("currentPassword")],
      "New password cannot be the same as the current password"
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

export const APIKeySchema = Yup.object().shape({
  projectName: Yup.string()
    .min(3, "Project name must be at least 3 characters")
    .required("Project name is required"),
  apiKey: Yup.string()
    .min(32, "API Key must be at least 32 characters")
    .required("API Key is required"),
});
