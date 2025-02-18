import { Provider } from '@/app/provider'
import '@/app/style.css'
import { Layout } from '@/components/layout'
import { Board } from '@/components/layout/board'
import { Issue } from '@/components/layout/issue'
import { NewIssueModal } from '@/components/layout/issue/new-issue-modal'
import { List } from '@/components/layout/list'
import { Search } from '@/components/layout/search'
import { Sidebar } from '@/components/layout/sidebar'
import { createRootRoute, createRoute, createRouter, Outlet, RouterProvider } from '@tanstack/react-router'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootRoute = createRootRoute({
  component: () => (
    <Provider>
      <Layout>
        <Sidebar className="hidden lg:flex" />
        <div className="w-full lg:max-w-[calc(100%-16rem)] p-2 lg:pl-0">
          <main className="flex flex-col h-full border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <Outlet />
          </main>
        </div>
      </Layout>
      <NewIssueModal />
    </Provider>
  ),
})
const indexRoute = createRoute({
  path: '/',
  component: List,
  getParentRoute: () => rootRoute,
})
const searchRoute = createRoute({
  path: '/search',
  component: Search,
  getParentRoute: () => rootRoute,
})
const boardRoute = createRoute({
  path: '/board',
  component: Board,
  getParentRoute: () => rootRoute,
})
export const issueRoute = createRoute({
  path: '/issue/$id',
  component: Issue,
  getParentRoute: () => rootRoute,
})

const routeTree = rootRoute.addChildren([indexRoute, searchRoute, boardRoute, issueRoute])
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
