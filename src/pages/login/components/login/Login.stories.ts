import type { Meta, StoryObj } from '@storybook/vue3'
import Login from './Login.vue'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Login> = {
  title: 'Pages/Login/Components/Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Login component used in the Login Page',
  },
  args: {
    onClickLink: action('click-link'), // Corrigi a sintaxe para coincidir com o emit
  },
  argTypes: {
    onClickLink: { action: 'click-link', description: 'Triggers when the sign-up link is clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithEmailAndPassword: Story = {
  args: {
    // Argumentos opcionais para pré-configurar campos de exemplo
    email: 'user@example.com',
    password: 'password123',
  },
}
