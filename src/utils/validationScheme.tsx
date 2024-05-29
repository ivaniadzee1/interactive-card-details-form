import * as Yup from 'yup'

export const SignupValidationSchema = Yup.object({
    Name: Yup.string().required().min(2, "Cardholder Name cannot be empty"),
    Number: Yup.string().required().min(3, "Last name must be at least 3 characters").matches(/^\d+$/, 'Wrong format, numbers only'),
    mm: Yup.string().required().min(2).max(2, "Can’t be blank").matches(/^\d+$/, 'Wrong format, numbers only'),
    yy: Yup.string().required().min(2).max(2, "Can’t be blank").matches(/^\d+$/, 'Wrong format, numbers only'),
    cvc:Yup.string().required().min(3).max(3, "Can’t be blank").matches(/^\d+$/, 'Wrong format, numbers only'),
})
