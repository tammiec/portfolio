export default function scrollToRef(ref) {
  window.scrollTo({
    left: 0, 
    top: ref.current.offsetTop - 46,
    behavior: 'smooth'
  })
}