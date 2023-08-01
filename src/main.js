import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import moment from 'moment'

import './assets/fonts/circularstd/stylesheet.css'
import './assets/fonts/Recoleta/stylesheet.css'

// import { library } from '@fortawesome/fontawesome-svg-core'


// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// import { faBars} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(faBars)

const app = createApp(App)

/**
 * @params {date} date to be converted to full date
 * @returns returns fullDate
 */
app.config.globalProperties.$filters = {
    fullDate(date) {
        return moment(date).format("dddd, MMMM D, YYYY")
    },
}
// .component('font-awesome-icon', FontAwesomeIcon).mount('#app')
app.use(router)
app.mount('#app')


