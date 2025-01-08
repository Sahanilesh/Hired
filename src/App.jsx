import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onbording from './pages/onbording'
import JobListing from './pages/jobListing'
import JobPage from './pages/job'
import PostJob from './pages/post-job'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:'/',
        element: <LandingPage />
      },
      {
        path:'/onbording',
        element: <Onbording />
      },
      {
        path:'/jobs',
        element: <JobListing />
      },
      {
        path:'/job/:id',
        element: <JobPage />
      },
      {
        path:'/post-jobs',
        element: <PostJob />
      },
      {
        path:'/saved-jobs',
        element: <SavedJobs />
      },
      {
        path:'/my-jobs',
        element: <MyJobs />
      }
    ]
  }
])
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
