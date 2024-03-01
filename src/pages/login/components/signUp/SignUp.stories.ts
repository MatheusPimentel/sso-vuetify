import type { Meta, StoryObj } from '@storybook/vue3'
import AppInput from './SignUp.vue'
import {action} from '@storybook/addon-actions'

const meta = {
  title: 'Pages/Login/Components/SignUp',
  component: AppInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Component SignUp from Login Page',
  },
  args: {
    "onClick-link": action('click-link')
  }

} satisfies Meta<typeof AppInput>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
}
