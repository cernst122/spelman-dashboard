import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import Button from 'primevue/button';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import RadioButton from 'primevue/radiobutton';
import Skeleton from 'primevue/skeleton';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Tree from 'primevue/tree';


const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Card', Card)
app.component('Carousel', Carousel)
app.component('Column', Column)
app.component('DataTable', DataTable)
app.component('RadioButton', RadioButton)
app.component('Skeleton', Skeleton)
app.component('TabPanel', TabPanel)
app.component('TabView', TabView)
app.component('Tree', Tree)
app.mount('#app')
