<script setup>
import { ref } from 'vue';

const images = import.meta.glob('@/assets/images/*.webp', {
  eager: true,
  import: 'default'
})

const fileNames = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

const appTitle = ref(import.meta.env.VITE_APP_TITLE || 'Our Journey');

const profileImage = fileNames[13];

const currentYear = new Date().getFullYear();

const hero = {
  badge: "Established 2025",
  title: "Our Beautiful Journey Together",
  description:
    "Every picture tells a story of the love we share and the adventures we have taken together.",
  image: fileNames[14],
};

const memories = [
  {
    month: "September 6 2025",
    title: "Our First Date",
    quote:
      "The day it all began at that first event together",
    image: fileNames[0],
  },
  {
    month: "October 11 2025",
    title: "Vintage Date",
    quote: "Chasing the golden hour and finding forever in your eyes.",
    image: fileNames[4],
  },
  {
    month: "November 16 2025",
    title: "PGS Cosplay",
    quote: "The first time we dressed up together - a day of laughter, creativity, and shared passions.",
    image: fileNames[7],
  },
  {
    month: "November 28 2025",
    title: "Movie Date",
    quote: "The night we got cozy and watched our first movie together - a perfect blend of popcorn and cinematic magic.",
    image: fileNames[8],
  },
  {
    month: "December 31 2025",
    title: "First New Year's Eve",
    quote: "Ringing in the new year with you by my side was the best way to start our journey together.",
    image: fileNames[12],
  },
  {
    month: "December 31 2025",
    title: "First New Year's Eve",
    quote: "Ringing in the new year with you by my side was the best way to start our journey together.",
    image: fileNames[13],
  },
  {
    month: "January 2 2026",
    title: "First New Year's Date",
    quote: "Starting the year with you was the best decision I ever made.",
    image: fileNames[15],
  },
  {
    month: "January 17 2026",
    title: "ArcDate",
    quote: "ArDate: where we played games, won prizes, and made memories that will last a lifetime.",
    image: fileNames[16],
  },
  {
    month: "February 1 2026",
    title: "Ice Skating Date",
    quote: "The night we glided together on the ice, creating memories that will last a lifetime.",
    image: fileNames[17],
  }, {
    month: "February 1 2026",
    title: "Ice Skating Date",
    quote: "The night we glided together on the ice, creating memories that will last a lifetime.",
    image: fileNames[18],
  },
  {
    month: "February 13 2026",
    title: "First Bouquet",
    quote: "The night we received our first bouquet together - a moment of joy and celebration.",
    image: fileNames[16],
  },
];

const trips = [
  {
    title: "Super Manila Comicon",
    location: "One Ayala - Sept 2025",
    image: fileNames[1],
  },
  {
    title: "Makati Night Stroll",
    location: "Makati - Sept 2025",
    image: fileNames[2],
  },
  {
    title: "Makati Night Stroll",
    location: "Makati - Sept 2025",
    image: fileNames[3],
  },
  {
    title: "Vintage Event",
    location: "YL Building - Oct 2025",
    image: fileNames[5],
  },
  {
    title: "Holi Date",
    location: "San Lorenzo's Mall - Oct 2025",
    image: fileNames[6],
  },
  {
    title: "Japanese Foods",
    location: "Marugame - Nov 2025",
    image: fileNames[9],
  },
  {
    title: "SunDate",
    location: "Glorietta -Nov 2025",
    image: fileNames[10],
  },
  {
    title: "SunDate",
    location: "Ayala Ave - Nov 2025",
    image: fileNames[11],
  },
  {
    title: "Weekend Stroll",
    location: "Ayala Circuit - Jan 2026",
    image: fileNames[16],
  }
];
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
    <div class="layout-container flex min-h-screen flex-col">
      <header class="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-background-light/80 px-6 py-4 backdrop-blur-md animate-fade-down dark:bg-background-dark/80 md:px-20">
        <div class="flex items-center gap-3">
          <div class="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary animate-soft-float">
            <span class="material-symbols-outlined text-2xl">favorite</span>
          </div>
          <h1 class="text-xl font-bold tracking-tight">
            {{ appTitle }}
          </h1>
        </div>

        <div class="flex items-center gap-4">
          <div
            class="size-10 rounded-full bg-cover bg-center ring-2 ring-primary/20"
            :style="{ backgroundImage: `url(${profileImage})` }"
          ></div>
        </div>
      </header>

      <main class="flex-1">
        <section class="px-4 py-8 md:px-20">
          <div class="relative h-[60vh] w-full overflow-hidden rounded-xl bg-background-light shadow-hero-glow dark:bg-background-dark md:h-[80vh]">
            <div
              class="absolute inset-0 bg-cover bg-center animate-slow-zoom"
              :style="{
                backgroundImage: `linear-gradient(to top, rgba(33, 21, 17, 0.8) 0%, rgba(33, 21, 17, 0) 50%), url(${hero.image})`
              }"
            ></div>
            <div class="absolute bottom-0 left-0 p-8 md:p-16 animate-fade-up [animation-delay:180ms] [animation-fill-mode:both]">
              <span class="mb-4 inline-block rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                {{ hero.badge }}
              </span>
              <h2 class="text-4xl font-bold leading-tight text-white md:text-6xl">
                {{ hero.title }}
              </h2>
              <p class="mt-4 max-w-md text-lg text-white/80">
                {{ hero.description }}
              </p>
            </div>
          </div>
        </section>

        <section class="px-4 py-16 md:px-20">
          <div class="mx-auto mb-16 max-w-3xl text-center animate-fade-up [animation-delay:250ms] [animation-fill-mode:both]">
            <h3 class="mb-4 text-3xl font-bold">Cherished Moments</h3>
            <div class="mx-auto h-1 w-20 rounded-full bg-primary"></div>
            <p class="mt-6 text-slate-600 dark:text-slate-400">
              From the first hello to all the quiet evenings in between, these are the frames that define us.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
            <article
              v-for="(memory, index) in memories"
              :key="memory.title"
              class="group flex flex-col gap-6 animate-fade-up"
              :class="index % 2 === 1 ? 'md:mt-24' : ''"
              :style="{ animationDelay: `${index * 140}ms`, animationFillMode: 'both' }"
            >
              <div class="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 shadow-lg transition-transform duration-500 group-hover:scale-[1.02] dark:bg-slate-800">
                <div
                  class="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  v-lazy-bg="memory.image"
                ></div>
              </div>
              <div class="px-2">
                <p class="mb-1 text-sm font-bold uppercase tracking-wider text-primary">{{ memory.month }}</p>
                <h4 class="mb-2 text-2xl font-bold">{{ memory.title }}</h4>
                <p class="italic text-slate-600 dark:text-slate-400">"{{ memory.quote }}"</p>
              </div>
            </article>
          </div>
        </section>

        <section class="overflow-hidden bg-primary/5 px-4 py-20">
          <div class="mb-12 px-4 md:px-16 animate-fade-up [animation-fill-mode:both]">
            <h3 class="text-3xl font-bold">Wanderlust Together</h3>
            <p class="mt-2 text-slate-600 dark:text-slate-400">The places we have been and the memories we have made.</p>
          </div>

          <div class="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto mx-4 pb-8 md:mx-16 horizontal-carousel">
            <article
              v-for="(trip, index) in trips"
              :key="trip.title"
              class="w-72 flex-none snap-start transition-transform duration-300 hover:-translate-y-1 md:w-96 animate-fade-up"
              :style="{ animationDelay: `${220 + index * 110}ms`, animationFillMode: 'both' }"
            >
              <div class="mb-4 aspect-video w-full overflow-hidden rounded-xl shadow-md">
                <div
                  class="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  v-lazy-bg="trip.image"
                ></div>
              </div>
              <h5 class="text-lg font-bold">{{ trip.title }}</h5>
              <p class="text-sm text-primary">{{ trip.location }}</p>
            </article>
          </div>
        </section>

        <section class="px-4 py-24 text-center animate-fade-up [animation-delay:500ms] [animation-fill-mode:both]">
          <div class="mx-auto mb-8 flex size-20 items-center justify-center rounded-full bg-primary/20 text-primary animate-soft-float">
            <span class="material-symbols-outlined text-4xl">favorite</span>
          </div>
          <h3 class="mb-6 text-4xl font-bold">To Many More Years...</h3>
          <p class="mx-auto mb-10 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            This is only the beginning of our story. We cannot wait to fill these pages with even more beautiful memories.
          </p>
        </section>
      </main>

      <footer class="border-t border-primary/10 bg-white px-6 py-12 dark:bg-background-dark/50">
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row md:px-14">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">favorite</span>
            <span class="text-lg font-bold">{{ appTitle}}</span>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Made with love &copy; {{ currentYear }}. Forever &amp; Always.</p>
          <div class="flex gap-6">
            <a class="text-slate-400 transition-colors hover:text-primary" href="#"><span class="material-symbols-outlined">camera</span></a>
            <a class="text-slate-400 transition-colors hover:text-primary" href="#"><span class="material-symbols-outlined">mail</span></a>
            <a class="text-slate-400 transition-colors hover:text-primary" href="#"><span class="material-symbols-outlined">book</span></a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.horizontal-carousel {
  scroll-behavior: smooth;
  anchor-name: --horizontal-carousel;
}
.horizontal-carousel::scroll-button(right) {
  content: '⇨';
  position-area: right center;
  translate: -1rem -100%;
}
.horizontal-carousel::scroll-button(left) {
  content: '⇦';
  position-area: left center;
  translate: 1rem -100%;
}
.horizontal-carousel::scroll-button(right), .horizontal-carousel::scroll-button(left) {
  border: none;
  background: rgb(255, 166, 0);
  color: white;
  font-size: 1.5rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding-bottom: .15em;
  cursor: pointer;
  position: fixed;
  z-index: 5;
  position-anchor: --horizontal-carousel;
}
.horizontal-carousel::scroll-button(right):disabled, .horizontal-carousel::scroll-button(left):disabled {
  opacity: 0.3;
  cursor: auto;
}

@media (max-width: 768px) {
  .horizontal-carousel::scroll-button(right), .horizontal-carousel::scroll-button(left) {
    font-size: 1.3rem;
    padding-bottom: .25em;
    height: 30px;
    width: 30px;
  }
    .horizontal-carousel::scroll-button(right) {
      translate: -0.5rem -150%;
    }
  
    .horizontal-carousel::scroll-button(left) {
      translate: 0.5rem -150%;
    }
}
</style>
