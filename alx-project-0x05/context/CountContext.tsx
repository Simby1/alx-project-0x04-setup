import { createContext, useContext,  useState, ReactNode } from "react"

// Defines the structure of the context data
interface CountContextProps {
  count: number
  increment: () => void
  decrement: () => void
}

// Create the context object, initialized to undefined
export const CountContext = createContext<CountContextProps | undefined>(undefined)

// The Provider component that holds the state and functions
export const CountProvider = ({ children }: { children: ReactNode}) => {

  const [count, setCount] = useState<number>(0)

  // Use functional updates for state consistency
  const increment = () => setCount((count ) => count + 1)
  const decrement = () => setCount((count) => count > 0 ? count - 1 : 0)

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  )
}

// Custom hook to consume the context and enforce usage within the provider
export const useCount = () => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be within a Count Provider")
  }

  return context
}
