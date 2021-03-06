import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session')
      .fetch()
      .catch(() => {});
  },

  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
