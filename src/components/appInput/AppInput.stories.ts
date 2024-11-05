import type { Meta, StoryObj } from '@storybook/vue3'
import AppInput from './AppInput.vue'

const meta: Meta<typeof AppInput> = {
  title: 'Components/AppInput',
  component: AppInput,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Reusable input component with customizable types and density options',
  },
  args: {
    required: false,
    label: 'Enter text',
    type: 'text',
    density: 'comfortable'
  },
  argTypes: {
    type: {
      options: ['text', 'number', 'email', 'password'],
      control: 'select',
      description: 'Type of input (text, number, email, or password)',
    },
    density: {
      options: ['default', 'comfortable', 'compact'],
      control: 'select',
      description: 'Visual density of the input field',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const EmailInput: Story = {
  args: {
    label: 'Email',
    type: 'email',
  },
}

export const NumberInput: Story = {
  args: {
    label: 'Number',
    type: 'number',
  },
}

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
  },
}

export const CompactInput: Story = {
  args: {
    label: 'Compact Density',
    density: 'compact',
  },
}
