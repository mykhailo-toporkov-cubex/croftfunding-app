import { Form, Wrapper } from "./DonationForm.styled";
import { DonationFormTypes } from "./DonationForm.types";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import axios from "axios";

const DonationForm = ({
  isDisplay = true,
  callback,
  campaignId,
}: DonationFormTypes) => {
  const initialValues = {
    campaignId,
    username: "",
    amount: 100,
  };

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    amount: yup.number().required("Amount is required").positive(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: any) => {
      await axios.post("http://localhost:3333/donations", { ...values });
      callback && callback(false)
      return;
    },
  });

  return (
    <Wrapper isDisplay={isDisplay}>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          id="username"
          name="username"
          label="Username"
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          id="amount"
          name="amount"
          label="Amount"
          type="number"
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
          value={formik.values.amount}
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit">
          DONATE
        </Button>
      </Form>
    </Wrapper>
  );
};

export default DonationForm;
