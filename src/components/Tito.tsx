import Script from 'next/script'

type Props = {
  eventName: string
}

export function Tito({ eventName }: Props) {
  return (
    <>
      <h1 className="text-2xl">Tito</h1>
      <Script src="https://js.tito.io/v2" async />
      <tito-widget event={eventName}></tito-widget>
    </>
  )
}
