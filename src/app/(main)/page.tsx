import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
// import { Speakers } from '@/components/Speakers'
import { Speakers } from '@/components/prelaunch/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Tito } from '@/components/Tito'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Tito eventName="elixirbytes/testconfoss" /> */}
      <Speakers />
      {/* <Schedule /> */}
      {/* <Sponsors /> */}
      {/* <Newsletter /> */}
    </>
  )
}
