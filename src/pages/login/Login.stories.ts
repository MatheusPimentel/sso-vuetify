import type { Meta, StoryObj } from '@storybook/vue3'
import AppInput from './index.vue'

const meta = {
  title: 'Pages/Login/index',
  component: AppInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Login Page',
  }

} satisfies Meta<typeof AppInput>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
}
