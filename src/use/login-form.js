import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm() {
    const store = useStore();
    const router = useRouter();

    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Введите email')
            .email('Необходимо ввести корректный email')
    )

    const MIN_LENGTH = 6

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Введите пароль')
            .min(MIN_LENGTH, `Пароль не может быть менее ${MIN_LENGTH} символов`)

    )

    const onSubmit = handleSubmit(async values => {
        try {
            await store.dispatch('auth/login', values)
            router.push('/')
        } catch (e) {

        }
    })

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => {
                submitCount.value = 0
            },3000)
        }
    })

    return {
        email,
        password,
        pError,
        eError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts
    }
}