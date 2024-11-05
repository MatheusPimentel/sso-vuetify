import { createI18n } from 'vue-i18n'
import messages from './messages'

const i18n = createI18n({
  locale: 'pt-BR',
  legacy: false,
  messages: messages
})
if (window?.app) {
  window.app.i18n = i18n
  console.log('window.app', window.app)
}
export default i18n
