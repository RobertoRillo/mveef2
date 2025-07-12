import Header from "./header"
import Countdown from "./countdown"

export default function page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Countdown />
    </div>
  )
}