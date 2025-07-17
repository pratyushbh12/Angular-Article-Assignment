import { footerComponent, headerComponent } from '@components';
import { TestController } from '@controllers';
import { main } from '@module';
import { routeConfig } from '@router';
import { i18nConfig } from '@translations';

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
