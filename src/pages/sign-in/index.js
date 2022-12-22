import React from 'react'
import './index.scss'

export const SignIn = () => {
	return (
		<section className="h-100 d-flex flex-column justify-content-between">
			<div className="container-fluid" style={{flex: '1 1 100%'}}>
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-md-9 col-lg-6 col-xl-5">
						<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
							className="img-fluid" alt="Hands" />
					</div>
					<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
						<form>
							<div className="form-outline mb-4">
								<label className="form-label" htmlFor="form3Example3">Email address</label>
								<input type="email" id="form3Example3" className="form-control form-control-lg"
									placeholder="Enter a valid email address" />
							</div>
  
							<div className="form-outline mb-3">
								<label className="form-label" htmlFor="form3Example4">Password</label>
								<input type="password" id="form3Example4" className="form-control form-control-lg"
									placeholder="Enter password" />
							</div>
  
							<div className="text-center text-lg-start mt-4 pt-2">
								<button type="button" className="btn btn-primary btn-lg"
									style={{'paddingLeft': '2.5rem', 'paddingRight': '2.5rem'}}>Login</button>
								<p className="small fw-bold mt-2 pt-1 mb-0">Don&apos;t have an account? <a href="#!"
									className="link-danger">Register</a></p>
							</div>
  
						</form>
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
