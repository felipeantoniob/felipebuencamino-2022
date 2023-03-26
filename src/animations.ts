const easing = [0.6, -0.5, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    y: 60,
    opacity: 0,
  },
}

export const stagger = (staggerTime: number) => {
  return {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: staggerTime,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }
}

export const child = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}
