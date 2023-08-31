import { localStorageEnum } from '@enums/index';

interface ISetting {
  darkMode: boolean;
}

export const useSettingStore = defineStore('settingStore', {
  state: (): ISetting => {
    return {
      darkMode: JSON.parse(localStorage.getItem(localStorageEnum.DARK_MODE) || 'false')
    };
  },
  actions: {
    changeTheme() {
      localStorage.setItem(localStorageEnum.DARK_MODE, JSON.stringify(!this.darkMode));
      this.darkMode = !this.darkMode;
    }
  }
});
