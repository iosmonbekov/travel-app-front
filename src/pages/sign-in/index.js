import React from 'react'
import { Formik } from 'formik'
import './index.scss'

export const SignIn = () => {
	const initialValues = { email: '', password: '' }

	const validate = (values) => {
		console.log(values)
		const errors = {}
		if (!values.email) {
			errors.email = 'Required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}
		return errors
	}

	const onSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 400)
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
							validate={validate}
							onSubmit={onSubmit}
						>{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
							}) => (
								<form onSubmit={handleSubmit}>
									<div className="form-outline mb-4">
										<label className="form-label">Email address</label>
										<input 
											type="email" 
											name='email' 
											className={`form-control form-control-lg ${touched.email && errors.email ? 'is-invalid' : touched.email && 'is-valid'}`} 
											placeholder="Enter a valid email address"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email} 
										/>
										<div className="invalid-feedback">
											{touched.email && errors.email}
										</div>
									</div>

									<div className="form-outline mb-3">
										<label className="form-label was-validated">Password</label>
										<input 
											type="password" 
											name='password' 
											className={`form-control form-control-lg ${touched.password && errors.password ? 'is-invalid' : touched.password && 'is-valid'}`} 
											placeholder="Enter password"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password} 
										/>
										<div className="invalid-feedback">
											{touched.password && errors.password}
										</div>
									</div>

									<div className="text-center text-lg-start mt-4 pt-2">
										<button disabled={isSubmitting} type="button" className="btn btn-primary btn-lg px-5">
											Login
										</button>
										<p className="small fw-bold mt-2 pt-1 mb-0">
											Don&apos;t have an account?
											<a href="#!" className="link-danger mx-2">Register</a>
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
