import Vue from 'vue'
import App from './App.vue'
import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);


import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faBell,faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMagnifyingGlass, faBell, faCaretUp, faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
