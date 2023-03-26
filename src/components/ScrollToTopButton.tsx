import { useEffect, useState } from 'react'

const useVisibleOnScroll = (yOffset: number) => {
  const [isVisibleOnScroll, setIsVisibleOnScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > yOffset) {
        setIsVisibleOnScroll(true)
      } else {
        setIsVisibleOnScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [yOffset])

  return { isVisibleOnScroll }
}

const UpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
    />
  </svg>
)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const ScrollToTopButton = () => {
  const { isVisibleOnScroll } = useVisibleOnScroll(300)

  return (
    <div className="fixed bottom-0 left-0 max-w-7xl right-0 w-full mx-auto flex justify-end mb-8">
      <button
        onClick={scrollToTop}
        className={`p-2 rounded-md shadow-sm shadow-slate-900 bg-slate-700 transition ${
          isVisibleOnScroll ? 'opacity-100' : 'opacity-0'
        } `}
      >
        <UpIcon />
      </button>
    </div>
  )
}

export default ScrollToTopButton
