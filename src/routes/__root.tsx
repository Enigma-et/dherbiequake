import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { BackToTop } from '../components/BackToTop'
import { ScrollToTop } from '../components/ScrollToTop'

export const Route = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <ScrollToTop />
      <Header />
      <main className="page-transition" role="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      {process.env.NODE_ENV === 'development' && (
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      )}
    </ErrorBoundary>
  ),
})

// import { Outlet, createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'

// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import { ErrorBoundary } from '../components/ErrorBoundary'

// export const Route = createRootRoute({
//   component: () => (
//     <ErrorBoundary>
//       <Header />
//       <main className="page-transition" role="main">
//         <Outlet />
//       </main>
//       <Footer />
//       {process.env.NODE_ENV === 'development' && (
//         <TanStackDevtools
//           config={{
//             position: 'bottom-right',
//           }}
//           plugins={[
//             {
//               name: 'Tanstack Router',
//               render: <TanStackRouterDevtoolsPanel />,
//             },
//           ]}
//         />
//       )}
//     </ErrorBoundary>
//   ),
// })
