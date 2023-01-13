import { createBrowserRouter } from 'react-router-dom'
import { 
	SignIn, 
	SignUp, 
	NotFound, 
	Home, 
	TourPage, 
	MyTours,
} from '../pages'

export const router = createBrowserRouter([
	{
		path: '/sign-in',
		element: <SignIn />,
	},
	{
		path: '/sign-up',
		element: <SignUp />
	},
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/tour/:id',
		element: <TourPage />
	},
	{
		path: '/my-tours',
		element: <MyTours />
	},
	{
		path: '*',
		element: <NotFound />
	}
])
