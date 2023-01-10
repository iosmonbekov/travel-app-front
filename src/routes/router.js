import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, NotFound, Home, TourPage } from '@pages'

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
		path: '*',
		element: <NotFound />
	}
])
