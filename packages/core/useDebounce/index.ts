import { ref, Ref } from '../../api'

export const useDebounce = (fn: Function, timeout: number): void => {
  const throttle: Ref<boolean> = ref(true)
  const release: Function = () => (throttle.value = false)

  setTimeout(release, timeout)
  if (!throttle) {
    fn()
  }
}
