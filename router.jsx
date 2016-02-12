FlowRouter.route('/', {
  action() {
    ReactLayout.render(Dashboard, {content: <Overview />});
  }
});

FlowRouter.route('/dashboard/overview', {
  action() {
    ReactLayout.render(Dashboard, {content: <Overview />});
  }
});

FlowRouter.route('/dashboard/reports', {
  action() {
    ReactLayout.render(Dashboard, {content: <Reports />});
  }
});

FlowRouter.route('/login', {
  action() {
    ReactLayout.render(Login);
  }
});

FlowRouter.route('/*', {
  action() {
    ReactLayout.render(ErrorPage);
  }
});