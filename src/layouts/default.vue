<template>
  <div>
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition name="slide">
        <div>
          <component :is="Component" :key="route" />
        </div>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
