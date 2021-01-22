import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const FormikApp = ({ values, errors, touched, handleSubmit, handleChange }) => {
  return (
    <Form className="container" onSubmit={handleSubmit}>
      <div>
        {/* For Error Handling errors and touched means whenever we stopped typing then we got the errors. */}
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <br />
      <label>
        <Field
          type="checkbox"
          name="newsletter-signup"
          checked={values.newsletterSignup}
          onChange={handleChange}
        />
        Join our newsletter
      </label>
      <br />
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="ultraPremium">Ultra Premium</option>
      </Field>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({ email, password, newsletterSignup, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletterSignup: newsletterSignup || true,
      plan: "premium" || plan,
    };
  },
  // ValidationSchema for Yup
  validationSchema: Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
  }),

  handleSubmit(values) {
    console.log(values);
  },
})(FormikApp);
