
new Vue({
    el: '#app',
    data: {
      title: 'Simple Vue.js Project',
      description: 'This is a simple one-page Vue.js project with HTML, CSS, and JS.',
      buttonText: 'Show Message',
      showMessage: false,
      message: 'Hello! You clicked the button.',
    },
    methods: {
      toggleMessage() {
        this.showMessage = !this.showMessage;
        this.buttonText = this.showMessage ? 'Hide Message' : 'Show Message';
      }
    }
  });
  