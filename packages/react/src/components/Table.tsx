import React from 'react'
import styled from 'styled-components'
import { colors } from '@adolphocavalcanti-ui/tokens'

export const Title = styled.h1`
  color: ${colors.acn500};
`

interface TableColumn {
  header: string
  width: string
}

interface TableRow {
  [key: string]: string | number
}

export interface TableProps {
  columns: TableColumn[]
  data: TableRow[]
}

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`

const TableHeader = styled.th<{ width: string }>`
  border: 1px solid black;
  padding: 8px;
  width: ${(props) => props.width};
`

const TableData = styled.td<{ width: string }>`
  border: 1px solid black;
  padding: 8px;
  width: ${(props) => props.width};
`

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <TableHeader key={index} width={column.width}>
              {column.header}
            </TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableData key={colIndex} width={column.width}>
                {row[column.header]}
              </TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}

Table.displayName = 'Table'
