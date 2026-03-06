export default {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.backgroundImage = `url(${binding.value})`
        observer.unobserve(el)
      }
    }, { threshold: 0.1 })

    observer.observe(el)
  }
}