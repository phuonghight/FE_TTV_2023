<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="theme">
    <n-dialog-provider>
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';
import { darkTheme, lightTheme } from 'naive-ui';
import { useSettingStore } from '@/stores/setting';
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#EF7C45FF',
    primaryColorHover: '#f37335'
  },
  Button: {
    border: '1px solid #F47B2A',
    borderPressed: '1px solid #F47B2A',
    textColorPressed: '#F47B2A',
    colorPrimary: '#F47B2A',
    textColorPrimary: 'white',
    colorFocusPrimary: '#f47b2a',
    textColorFocusPrimary: 'white',
    colorHoverPrimary: 'white',
    textColorHoverPrimary: '#f47b2a',
    colorPressedPrimary: '#f47b2a',
    borderPressedPrimary: '1px solid #F47B2A',
    textColorPressedPrimary: 'white'
  }
};

const settingStore = useSettingStore();
const theme = computed(() => (settingStore.darkMode ? darkTheme : lightTheme));
</script>
