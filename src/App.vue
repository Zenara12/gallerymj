<script setup>
const navLinks = ["Our Story", "Gallery", "Timeline"];

const profileImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXTcxYxvCc31IBVaO0CGUgDj9deLzG2_gdjFNDi-Qe7FdN7DNvVleviAFuDxzBtysCIh1fQSXH5VqpJ7nih-p_Egaz-yFFzIpQ0FF8m21b_4AIRvNeyZn2c8HzxNhlCov0fREe3f7EHsnQF-6ehPMgeZGoEFh770kEg5-DZ8f4kR3HQM9lMg_QQjYUuEMMS53yJFB0ygUeruJv0R5k4l54CmKYsUdMopNhgfgKts0_ctC4JYGgbGdy_JpO0M5W7Wj1G3Cb3O0eb0wR";

const hero = {
  badge: "Established 2021",
  title: "Our Beautiful Journey Together",
  description:
    "Every picture tells a story of the love we share and the adventures we have taken together.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCH1Rfqn1_FxDQ_s68sGI87BA1aTUTUxmYv1Z1z48z5uCiVpXUrXKnSOaMZeFhBQ_6z4l73Q-J7QDxmhDtP48o48EqZM1WRoXtwZclQQJDkiWvL_2SsSy_FFzSSECUivUU3u_9zjQ1J6C_bknhYWTCg4Ey3vMCYG0BnFQup_NUpzPQHuVPM3uEgkH1BpSxtnu_ui99tDBpJ7vs2VYaLMr0p5ksGsOoumKPk-7FGC3gEah1X6EV_Ye3KB6SvDcf_a0ObTjbF5lzk4rhC",
};

const memories = [
  {
    month: "September 2021",
    title: "Our First Date",
    quote:
      "The day it all began at that small corner coffee shop in the rain.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD65Nuk54_hiurzRrCyPKJO-izAsQEbv_7RQCNLnWaewRBq7K9CoWAa9CVyORVAJXBihaKhz97kz8QNVJBa6Pa1PbIifoSJf4O25lv_He0Y_5Vv384HAGN4QwPAs8VMWPn7GqUxHU6rtNt9eO4stVmwJlJXRy37EzNFjweHgssQaUgEq_Cc67HbX0rbp7N6sISA9rp4ezyr15vLK4aT9Idpu3Ktqs7huDrnb9KtgWZWWTKl1OHai2X13s5j6UiUl6cUisM8u2tGg524",
  },
  {
    month: "October 2021",
    title: "Sunset at the Beach",
    quote: "Chasing the golden hour and finding forever in your eyes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGJhV1s77OOUkVeanzpnUiC8uNKs_9fItgtFueChC62DM-yeDwtohnfcU1HKRex8tERb_djEwY4oZb-EwNd9mkkNJYfHJ_mt4cH9hOvhpIOYTKNHJfP8mHVOBthBFjstk5Z_kkGP3WF2pAka3No6TZo0vbRtMxgxc269c1ExOZuxqyGeEKDqV8QUDpuIEL_SDLwEJJiuDh6G1vTX-_L__hwgTvokHXJuts7OySRK2PbwvWan8dkLPsmp9wN3qeM-rC6lvZZdaPs4Nu",
  },
  {
    month: "November 2021",
    title: "Weekend Getaway",
    quote: "Lost in the mountains, but perfectly found with you.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDORrNiu9ZBBODrULqkIgTURwc7nN9esl6dFpJ-F4jG8roboqO7EWQZr0clQqFfc0PwEnfCS-1LUOMIIrm1ZctvgPDu5o2dJySZ9n3DRj88F15_7VF5yGjYUOSYzvhi90nTJpSr8Kvo4uXEHaBTMEvNmGItPfxSDkJQcDQ0s_-zk0BPx4tKJew22yOnBDW_y6YEAaEEwhk6tE9TywttRoPvF9fLw0bRFEQDFr4Cf7sdSI-RzGFThXWm-ITBsIDLRbHmpU-vcdvDOvI9",
  },
  {
    month: "December 2021",
    title: "Anniversary Dinner",
    quote: "A year of laughter, growth, and unconditional love.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1xfAPdnbQ9LiIkP6t1pLw6j1RFsS3hwEuu0NwxUOaL34zAS-4B3odIj7sWslNqrsuUlvah9oRuYLcsLYGo4MQiVTfV9uxPGMP3vefS0o4KFbZqglpA2-xEjnUnWBn_nITgQ9Lf7EXw3CjInmQ9gCYhQwuHlzptEV5pTduTJP2wLCfA85Hko_4F_An47XqUYcToILFvR6CkJfskcjZWVKqRkScylb5xxJzk_kWkL8Z8Ip4naoFn5tJwiueOPPqUX7xGiDZ9T5MPiQN",
  },
];

const trips = [
  {
    title: "City of Love",
    location: "Paris, France - 2022",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRyPSikTGJ8norednfqjjRTK_DpfPZDvbBgNgqf2LCkGfTyyWndgF9mA6xwIMg2ysEJ9cGH2C2Y1JYdb2xMeFuGekRH6ervpnnCdXVPlb7EHiNMESncoYc1M9yCwOjRz98zZeMdyTN6ZeWf8CUnRNlVOWciUV-fmUNRYk1pkyIgzDqUX-_IcmJdegSvUCcu3zExuA6BoRC977AzXmG3F37Elg6VjBwGEIbA230OH16YXs1zmkOzla7ZLxaFWbcQjaslQvmx4gInnAI",
  },
  {
    title: "Nature's Sanctuary",
    location: "Redwood Forest - 2022",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKG5ckzupVK3dJp8N7EwRryc1AgOeEAHxOEFAFH18s0d0Qjpvae-sgJDx6O8om2h0O3E0Ahduaic8HOXFXk517vYEO5t4PfLsddD6pjP0eXsEYbwje8MGrlGlRZu8OCNqUvVMPpH8_bvbOAYOGFsJe4hMVqNwOI4QwN0w_wDl3QrPGmxxuBM8YleohrMz8f7B-1cloWT8yv-i2i9_Gxoh8nJPCDQBzXL9Ck9BK07fx4gtteL6RgnAMs6NRS80bpnuL3UNyOCjqkV6N",
  },
  {
    title: "The Bright Lights",
    location: "New York City - 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2fEK3393VXMbT8jS0p_ZUu7FsFI-IXpc4-G1BS95MiJgUSD5EIgIdYbJWH8FgcpR9NArIuVnG3H5VlYmelOmtqFcD44CJBk8l8fGM3ycjGsQ3vv9R4YTrqnM4AYceabnR1xu65g8A_Ts0x9__rRZ8YOWYDYvZcgbx-QbXAtyruXu4xI5q4xgu4c55rAaBk3fr6bNrSgP6kuzoWhqi9y_FyCikw5mMk9uJml1YgXlwhPM6dwFQdm7kQAmgjVcuB86aprscrGIEM0_Q",
  },
  {
    title: "Island Paradise",
    location: "Bali, Indonesia - 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeBcDE6gv_8rP26hiqSgLr-EGl1Bc8OdJsmrL5pDuQfb25d2VF7GzXtikQ0xy4cJuSMT7ooQnsBQ57GkXFinVxeZqqPRftuEWXgqnvpdfX9hM57YeCwBC6OEFzaPz_KmqKMJhsbR9B1HMgFyhxwRundZo5KrUE2Xy4viJnA6pJTPeBWGdnOb2ImF_w4UNZYx2YlyVo4jVrxzVclHz0b0ekn6UwGsFCi5JdSpD-pGt8NtD-Sh99ni2O3EpH6qD4vfEkKCwoOZjB_Ylo",
  },
  {
    title: "Island Paradise",
    location: "Bali, Indonesia - 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeBcDE6gv_8rP26hiqSgLr-EGl1Bc8OdJsmrL5pDuQfb25d2VF7GzXtikQ0xy4cJuSMT7ooQnsBQ57GkXFinVxeZqqPRftuEWXgqnvpdfX9hM57YeCwBC6OEFzaPz_KmqKMJhsbR9B1HMgFyhxwRundZo5KrUE2Xy4viJnA6pJTPeBWGdnOb2ImF_w4UNZYx2YlyVo4jVrxzVclHz0b0ekn6UwGsFCi5JdSpD-pGt8NtD-Sh99ni2O3EpH6qD4vfEkKCwoOZjB_Ylo",
  },
  {
    title: "Island Paradise",
    location: "Bali, Indonesia - 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeBcDE6gv_8rP26hiqSgLr-EGl1Bc8OdJsmrL5pDuQfb25d2VF7GzXtikQ0xy4cJuSMT7ooQnsBQ57GkXFinVxeZqqPRftuEWXgqnvpdfX9hM57YeCwBC6OEFzaPz_KmqKMJhsbR9B1HMgFyhxwRundZo5KrUE2Xy4viJnA6pJTPeBWGdnOb2ImF_w4UNZYx2YlyVo4jVrxzVclHz0b0ekn6UwGsFCi5JdSpD-pGt8NtD-Sh99ni2O3EpH6qD4vfEkKCwoOZjB_Ylo",
  },
  {
    title: "Island Paradise",
    location: "Bali, Indonesia - 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeBcDE6gv_8rP26hiqSgLr-EGl1Bc8OdJsmrL5pDuQfb25d2VF7GzXtikQ0xy4cJuSMT7ooQnsBQ57GkXFinVxeZqqPRftuEWXgqnvpdfX9hM57YeCwBC6OEFzaPz_KmqKMJhsbR9B1HMgFyhxwRundZo5KrUE2Xy4viJnA6pJTPeBWGdnOb2ImF_w4UNZYx2YlyVo4jVrxzVclHz0b0ekn6UwGsFCi5JdSpD-pGt8NtD-Sh99ni2O3EpH6qD4vfEkKCwoOZjB_Ylo",
  },
  {
    title: "Island Paradise",
    location: "Bali, Indonesia - 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeBcDE6gv_8rP26hiqSgLr-EGl1Bc8OdJsmrL5pDuQfb25d2VF7GzXtikQ0xy4cJuSMT7ooQnsBQ57GkXFinVxeZqqPRftuEWXgqnvpdfX9hM57YeCwBC6OEFzaPz_KmqKMJhsbR9B1HMgFyhxwRundZo5KrUE2Xy4viJnA6pJTPeBWGdnOb2ImF_w4UNZYx2YlyVo4jVrxzVclHz0b0ekn6UwGsFCi5JdSpD-pGt8NtD-Sh99ni2O3EpH6qD4vfEkKCwoOZjB_Ylo",
  },
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
          <h1 class="text-xl font-bold tracking-tight">Alex &amp; Sam</h1>
        </div>

        <nav class="hidden items-center gap-8 md:flex">
          <a
            v-for="link in navLinks"
            :key="link"
            href="#"
            class="text-sm font-medium transition-colors hover:text-primary"
          >
            {{ link }}
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <button class="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20">
            <span class="material-symbols-outlined">share</span>
          </button>
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
                  :style="{ backgroundImage: `url(${memory.image})` }"
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
                  :style="{ backgroundImage: `url(${trip.image})` }"
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
          <button class="rounded-full bg-primary px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/20">
            Add a New Memory
          </button>
        </section>
      </main>

      <footer class="border-t border-primary/10 bg-white px-6 py-12 dark:bg-background-dark/50">
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row md:px-14">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">favorite</span>
            <span class="text-lg font-bold">Alex &amp; Sam</span>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Made with love (c) 2024. Forever &amp; Always.</p>
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
  content: '🢡';
  position-area: right center;
  translate: -1rem -100%;
}
.horizontal-carousel::scroll-button(left) {
  content: '🢠';
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
