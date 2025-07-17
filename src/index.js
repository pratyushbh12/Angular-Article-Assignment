import { main } from './module';
import { TestController } from './controllers';
import { i18nConfig } from './translations/i18n/i18n.config';
import { routeConfig } from './router';
import { headerComponent, footerComponent } from './components';

/** Main Module */
const app = main.module;

/** Module Configs */
app.config(routeConfig);
app.config(i18nConfig);

/**Module components */
app.component('headerComp', headerComponent());
app.component('footerComp', footerComponent());

/** Module controllers */
app.controller('myController', TestController);
