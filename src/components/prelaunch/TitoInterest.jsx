/*
 * We have to use jsx instead of tsx because `tito-register-interest` is coming from somewhere strange
 * and makes typescript mad. I don't want to learn how to allow it.
 */
import Script from 'next/script'

export function TitoInterest({ eventName }) {
  return (
    <>
      <Script src="https://js.tito.io/v2" async />
      <tito-register-interest event={eventName}></tito-register-interest>
    </>
  )
}
