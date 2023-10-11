/*
 * We have to use jsx instead of tsx because `tito-widget` is coming from somewhere strange
 * and makes typescript mad. I don't want to learn how to allow it.
 */
import Script from 'next/script'

export function Tito({ eventName }) {
	return (
		<>
			<h1 className="text-2xl">Tito</h1>
			<Script src="https://js.tito.io/v2" async />
			<tito-widget event={eventName}></tito-widget>
		</>
	)
}
