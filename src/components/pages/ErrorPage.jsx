var Link = ReactRouter.Link;

ErrorPage = React.createClass({

  render: function() {
    return (

		<div>
	      	<div className="login-page">
				<div className="row">
					<div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
						<a href="/dashboard/overview" className="hvr-pulse-grow">
							<img src="/flat-avatar.png" className="user-avatar" />
						</a>
						<h1>Ani Theme </h1>
						<div className="four-container text-center">
							<h1>404</h1>
						</div>
						Oops! Page not found.
					</div>	
				</div>
			</div>
		</div>
    );
  }

});