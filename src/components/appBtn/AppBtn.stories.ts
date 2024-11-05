import type { Meta, StoryObj } from '@storybook/vue3'
import AppBtn from './AppBtn.vue'

const meta: Meta<typeof AppBtn> = {
  title: 'Components/AppBtn',
  component: AppBtn,
  tags: ['autodocs'],
  args: {
    block: true,
    color: 'primary', // Defina uma cor padrão para exibir o botão
    label: 'Default Label' // Valor padrão de label para a Story
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click me!'
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Secondary Button'
  }
}

export const Disabled: Story = {
  args: {
    color: 'primary',
    label: 'Disabled Button',
    block: false,
    disabled: true
  }
}
