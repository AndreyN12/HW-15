import { useEffect, useState } from "react"


export const useTypeDevice = () => {
  const [typeDevise, setTypeDevice] = useState("desktop")


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 479) {
        setTypeDevice("mobile")
      } else if (window.innerWidth < 768 && window.innerWidth > 480) {
        setTypeDevice("tablet")
      } else {
        setTypeDevice("desktop")
      }
    };
    window.addEventListener("resize", handleResize)

    return () => {
      window.addEventListener("resize", handleResize)
    }
  }, [])

  return typeDevise;
}