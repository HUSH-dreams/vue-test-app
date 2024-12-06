import {useField, useForm} from "vee-validate";
import * as yup from "yup";

export function useRequestForm(fn) {
    const {isSubmitting, handleSubmit} = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const {value: initials, errorMessage: iError, handleBlur: iBlur} = useField(
        'initials',
        yup.string()
            .trim()
            .required('Введите ФИО клиента')
    )

    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'phone',
        yup.string()
            .trim()
            .required('Введите номер телефона')
    )

    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
        'amount',
        yup.number()
            .required('Введите сумму')
            .min(0, 'Сумма не может быть меньше 0')
    )
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        status,
        isSubmitting,
        onSubmit,
        initials,
        iBlur,
        iError,
        phone,
        pError,
        pBlur,
        amount,
        aError,
        aBlur
    }
}