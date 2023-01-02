import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, NotFound, Home } from '@pages/index.js'

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
		path: '*',
		element: <NotFound />
	}
])
