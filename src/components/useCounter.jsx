import { useState } from "react"

export const useCounter = (initialVal = 0) => {
  const [state, setState] = useState(initialVal)


  const increase = () => {
    setState((prev) => prev + 1)
  }

  const decrease = () => {
    setState((prev) => prev - 1)
  }

  const reset = () => {
    setState(0)
  }

  return [state, increase, decrease, reset]


}