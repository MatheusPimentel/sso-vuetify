import type { Meta, StoryObj } from '@storybook/vue3'

import AppBtn from './AppBtn.vue'

const meta = {
  title: 'Components/AppBtn',
  component: AppBtn,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    block: true,
    color: undefined,
    label: undefined
  },

} satisfies Meta<typeof AppBtn>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
}
