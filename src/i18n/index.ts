import { createI18n } from 'vue-i18n'
import messages from './messages'

const i18n = createI18n({
  locale: 'pt-BR',
  legacy: false,
  messages: messages
})
window.app.i18n = i18n
export default i18n
