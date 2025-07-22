import './stylesheet/index.css';

import { footerComponent, headerComponent } from '@components';
import { TestController } from '@controllers';
import { main } from '@module';
import { routeConfig } from '@router';
import { authService } from '@services';
import { i18nConfig } from '@translations';

/** Main Module */
const app = main.module;

/** Module Configs */
app.config(routeConfig);
app.config(i18nConfig);

/** Services */
app.factory('authService', authService);

/**Module components */
app.component('headerComp', headerComponent);
app.component('footerComp', footerComponent);

/** Module controllers */
app.controller('myController', TestController);
