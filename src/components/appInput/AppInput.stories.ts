import type { Meta, StoryObj } from '@storybook/vue3'
import AppInput from './AppInput.vue'

const meta = {
  title: 'Components/AppInput',
  component: AppInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Component AppInput',
  },
  args: {
    required: false,
    label: '',
  },
  argTypes: {
    type: {
      options: ['text', 'number', 'email', 'password'],
      control: 'select'
    },
    density: {
      options: ['default', 'comfortable', 'compact'],
      control: 'select'
    }
  }

} satisfies Meta<typeof AppInput>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
}
