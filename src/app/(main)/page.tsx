import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
// import { Speakers } from '@/components/Speakers'
import { Speakers } from '@/components/prelaunch/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { TitoInterest } from '@/components/prelaunch/TitoInterest'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Tito eventName="elixirbytes/testconfoss" /> */}
      <TitoInterest eventName="eexconf/zagreb-2024" />
      <Speakers />
      {/* <Schedule /> */}
      {/* <Sponsors /> */}
      {/* <Newsletter /> */}
    </>
  )
}
