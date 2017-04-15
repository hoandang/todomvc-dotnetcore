import {Router} from 'director';

const router = new Router;

function start(App) {
  ['all', 'active', 'completed'].forEach(route => {
    router.on(route, () => {
      App.$store.commit('setRoute', {route});
    });
  });

  router.configure({
    notfound: function () {
      window.location.hash = '';
      App.$store.commit('setRoute', {route: 'all'});
    }
  });

  router.init();
}

export default {start};
