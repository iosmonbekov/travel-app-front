import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from '@pages/index.js'

export const router = createBrowserRouter([
	{
		path: '/sign-in',
		element: <SignIn />,
	},
])
