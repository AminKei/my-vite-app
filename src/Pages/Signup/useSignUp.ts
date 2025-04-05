import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

const useSignUp = () => {
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      console.log("value:", value);
      alert("You are signed up!");
    },
  });

  return {
    ...formik,
  };
};

export default useSignUp;
