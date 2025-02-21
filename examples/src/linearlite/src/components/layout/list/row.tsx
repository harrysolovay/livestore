import { Avatar } from '@/components/common/avatar'
import { PriorityMenu } from '@/components/common/priority-menu'
import { StatusMenu } from '@/components/common/status-menu'
import { mutations } from '@/lib/livestore/schema'
import { Issue } from '@/types/issue'
import { Priority } from '@/types/priority'
import { Status } from '@/types/status'
import { formatDate } from '@/utils/format-date'
import { getIssueTag } from '@/utils/get-issue-tag'
import { useStore } from '@livestore/react'
import { useNavigate } from '@tanstack/react-router'
import type { CSSProperties } from 'react'
import React from 'react'

export const Row = React.memo(({ issue, style }: { issue: Issue; style: CSSProperties }) => {
  const navigate = useNavigate()
  const { store } = useStore()

  const handleChangeStatus = React.useCallback(
    (status: Status) => store.mutate(mutations.updateIssueStatus({ id: issue.id, status })),
    [store, issue.id],
  )

  const handleChangePriority = React.useCallback(
    (priority: Priority) => store.mutate(mutations.updateIssuePriority({ id: issue.id, priority })),
    [store, issue.id],
  )

  return (
    <div
      key={issue.id}
      id={issue.id.toString()}
      className="flex items-center gap-4 justify-between pr-4 pl-2 lg:pl-4 w-full text-sm border-b last:border-b-0 border-neutral-200 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 dark:border-neutral-700"
      onClick={() => navigate({ to: '/issue/$id', params: { id: `${issue.id}` } })}
      style={style}
    >
      <div className="flex items-center gap-px">
        <PriorityMenu priority={issue.priority} onPriorityChange={handleChangePriority} />
        <div className="text-neutral-500 dark:text-neutral-400 px-1 text-xs hidden lg:block min-w-14">
          {getIssueTag(Number(issue.id))}
        </div>
        <StatusMenu status={issue.status} onStatusChange={handleChangeStatus} />
        <div className="font-medium ml-2 shrink line-clamp-1">{issue.title}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:block text-neutral-500 dark:text-neutral-400 text-xs">
          {formatDate(new Date(issue.created))}
        </div>
        <Avatar name={issue.creator} />
      </div>
    </div>
  )
})
