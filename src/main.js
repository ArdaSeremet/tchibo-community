import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faStar, faStarHalfAlt, faMoneyBillWave, faPlus, faEuroSign, faCaretDown, faCaretUp, faBars, faUserAlt, faShoppingCart, faPhoneAlt, faSearch, faClock, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWhatsapp, faTimes, faInstagram, faStar, faStarHalfAlt, faMoneyBillWave, faPlus, faEuroSign, faCaretDown, faCaretUp, faChevronLeft, faChevronRight, faBars, faUserAlt, faShoppingCart, faPhoneAlt, faTwitter, faYoutube, faFacebookSquare, faSearch, faClock)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
