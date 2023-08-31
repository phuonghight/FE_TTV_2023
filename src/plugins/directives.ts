import type { App } from 'vue';

import copy from '@directives/copy';

export function setupDirectives(app: App) {
  app.directive('copy', copy);
}
