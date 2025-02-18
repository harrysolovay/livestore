import { Row } from '@/components/layout/list/row'
import { tables } from '@/lib/livestore/schema'
import { useRow } from '@livestore/react'
import React from 'react'
import { areEqual } from 'react-window'

export const VirtualRow = React.memo(
  ({ data, index, style }: { data: readonly number[]; index: number; style: React.CSSProperties }) => {
    const [issue] = useRow(tables.issue, data[index]!)
    return <Row key={`issue-${issue.id}`} issue={issue} style={style} />
  },
  areEqual,
)
