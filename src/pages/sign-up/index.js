import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Formik } from 'formik'


import { INPUT_VALIDATORS, validate } from '@utils'
import { http } from '@http'

export const SignUp = () => {
	const navigate = useNavigate()
	const initialValues = { email: '', password: '', repeatPassword: '' }

	const onSubmit = async (values, { setSubmitting }) => {
		try {
			await http.post('auth/sign-up', values)
			setSubmitting(false)
			navigate('/')
		} catch (e) {
			alert(e.response.data.error)
		}
	}

	return (
		<section className="h-100 d-flex flex-column justify-content-between">
			<div className="container-fluid" style={{ flex: '1 1 100%' }}>
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-md-9 col-lg-6 col-xl-5">
						<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
							className="img-fluid" alt="Hands" />
					</div>
					<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
						<Formik
							initialValues={initialValues}
							onSubmit={onSubmit}
						>{({
								values,
								errors,
								touched,
								handleSubmit,
								isSubmitting,
							}) => (
								<form onSubmit={handleSubmit}>
									<div className="form-outline mb-3">
										<label className="form-label">Email address</label>
										<Field 
											type="email" 
											name='email' 
											className={`form-control form-control-lg ${touched.email && errors.email ? 'is-invalid' : touched.email && 'is-valid'}`} 
											placeholder="Enter a valid email address"
											validate={validate([INPUT_VALIDATORS.required(), INPUT_VALIDATORS.email()])}
											value={values.email} 
										/>
										<div className="invalid-feedback">
											{touched.email && errors.email}
										</div>
									</div>

									<div className="form-outline mb-3">
										<label className="form-label was-validated">Password</label>
										<Field 
											type="password" 
											name='password' 
											className={`form-control form-control-lg ${touched.password && errors.password ? 'is-invalid' : touched.password && 'is-valid'}`} 
											placeholder="Enter password"
											validate={validate([INPUT_VALIDATORS.required(), INPUT_VALIDATORS.min(6)])}
											value={values.password} 
										/>
										<div className="invalid-feedback">
											{touched.password && errors.password}
										</div>
									</div>

									<div className="form-outline mb-4">
										<label className="form-label">Repeat password</label>
										<Field 
											type="password" 
											name='repeatPassword' 
											className={`form-control form-control-lg ${touched.repeatPassword && errors.repeatPassword ? 'is-invalid' : touched.repeatPassword && 'is-valid'}`} 
											placeholder="Enter a valid email address"
											validate={
												validate([
													INPUT_VALIDATORS.required(), 
													INPUT_VALIDATORS.min(6),
													INPUT_VALIDATORS.same(values.password, 'Passwords not same')
												])}
											value={values.repeatPassword} 
										/>
										<div className="invalid-feedback">
											{touched.repeatPassword && errors.repeatPassword}
										</div>
									</div>

									<div className="text-center text-lg-start mt-4 pt-2">
										<button disabled={isSubmitting} type="submit" className="btn btn-primary btn-lg px-5">
                                            Sign up
										</button>
										<p className="small fw-bold mt-2 pt-1 mb-0">
											Already have account?
											<Link to="/sign-in" className="link-danger mx-2">Sign in</Link>
										</p>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>

			<div
				className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary mt-3">
				<div className="text-white mb-3 mb-md-0">
					Copyright © 2022. All rights reserved.
				</div>
			</div>
		</section>
	)
}
