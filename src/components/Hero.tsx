import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h4 className="mb-2 text-xl font-medium">European Elixir Exchange</h4>
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">EEXConf - </span>The First Community Run
            Elixir Conference in Europe
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              EExConf is a community driven Elixir conference with an emphasis
              on keeping the quality level high while staying affordable for
              attendees.
            </p>
            <p>
              Our first conference will take place in Zagreb, Croatia with other
              events to follow all around Europe.
            </p>
            <p>
              We're also keeping our energy footprint as low as possible and ask
              that if you have to travel far, that you travel by train to the
              event.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          {/* <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left"> */}
          {/*   {[ */}
          {/*     // ['Speakers', '1'], */}
          {/*     // ['People Attending', '??'], */}
          {/*     // ['Venue', '??'], */}
          {/*     // ['Location', 'Zagreb'], */}
          {/*   ].map(([name, value]) => ( */}
          {/*     <div key={name}> */}
          {/*       <dt className="font-mono text-sm text-blue-600">{name}</dt> */}
          {/*       <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900"> */}
          {/*         {value} */}
          {/*       </dd> */}
          {/*     </div> */}
          {/*   ))} */}
          {/* </dl> */}
        </div>
      </Container>
    </div>
  )
}
