const ERROR_CODES = {
    EMAIL_NOT_FOUNT: 'Пользователь с таким email не зарегистрирован',
    INVALID_PASSWORD: 'Пароль неверный',
    INVALID_LOGIN_CREDENTIALS: 'Неправильные данные входа',
    auth: 'Войдите в систему'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}