import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, NotFoundPage } from '@pages/index.js'

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
		path: '*',
		element: <NotFoundPage />
	}
])
