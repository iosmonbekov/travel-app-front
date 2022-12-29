import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { SignIn, SignUp } from '@pages/index.js'

export const router = createBrowserRouter([
	{
		path: '/sign-in',
		element: <SignIn />,
	},
	{
		path: '/sign-up',
		element: <SignUp />
	},
])
