import { validateEmail, validateRequired } from '@/util/validate'
import { lang } from '@/util/lang'

const isEmail = (email: string): boolean | string => validateEmail(email) || lang('publicKeys.invalidEmail')

const isRequired = (field: string | null | undefined): boolean | string => validateRequired(field) || lang('publicKeys.fieldRequired')

export { isEmail, isRequired }
