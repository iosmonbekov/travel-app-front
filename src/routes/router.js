import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from '../pages/sign-in'

export const router = createBrowserRouter([
	{
		path: '/sign-in',
		element: <SignIn />,
	},
])
