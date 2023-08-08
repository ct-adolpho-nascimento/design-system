import type { StoryObj, Meta } from '@storybook/react'
import { Table, TableProps } from '@adolphocavalcanti-ui/react'

export default {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
} as Meta<TableProps>

export const Primary: StoryObj = (args: TableProps) => <Table {...args} />

const exampleColumns = [
  { header: 'FirstName', width: '20%' },
  { header: 'LastName', width: '20%' },
  { header: 'Age', width: '15%' },
  { header: 'City', width: '45%' },
]

const exampleData = [
  { FirstName: 'John', LastName: 'Travolta', Age: 25, City: 'New York' },
  { FirstName: 'Brad', LastName: 'Pit', Age: 25, City: 'Chicago' },
  { FirstName: 'Jane', LastName: 'Wink', Age: 30, City: 'San Francisco' },
]

Primary.args = {
  columns: exampleColumns,
  data: exampleData,
}
