import type { Meta, StoryObj } from '@storybook/vue3'
import SignUp from './SignUp.vue'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof SignUp> = {
  title: 'Pages/Login/Components/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'SignUp component used in the Login Page',
  },
  args: {
    onClickLink: action('click-link'), // Corrigi a notação do evento
  },
  argTypes: {
    onClickLink: { action: 'click-link', description: 'Triggered when the sign-in link is clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FilledExample: Story = {
  args: {
    // Preenchendo os campos como exemplo
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
  },
}

export const InvalidEmailExample: Story = {
  args: {
    // Demonstração de um estado inválido
    name: '',
    email: 'invalid-email',
    password: 'password123',
  },
}
