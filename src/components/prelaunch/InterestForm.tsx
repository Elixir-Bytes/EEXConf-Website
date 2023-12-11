'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
type ClientResponse = {
  status: number
  body: null | object
  successful: boolean
}

async function addInterest(formData: FormData): Promise<ClientResponse> {
  const email = formData.get('email')
  const url = '/api/register_interest'
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    const body = await res.json()

    return { body, status: res.status, successful: res.ok }
  } catch (e) {
    console.log('Error while making Tito request:', e)
    return { status: 500, body: null, successful: false }
  }
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InterestForm() {
  const [email, setEmail] = useState<string>('')
  const [response, setResponse] = useState<ClientResponse | null>(null)
  if (response && !response.successful) {
    console.error(
      `code: ${response.status} => ${JSON.stringify(response.body)}`,
    )
  }

  const onSubmit = async (data: FormData) => {
    const res = await addInterest(data)
    setResponse(res)
  }

  return (
    <section
      id="interest"
      aria-labelledby="interest-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h2
            id="speakers-title"
            className="mb-12 font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Make sure you get your tickets
          </h2>
          <form action={onSubmit}>
            <h3 className="text-lg font-semibold tracking-tight text-blue-900">
              Would you like to keep up to date?{' '}
              <span aria-hidden="true">&darr;</span>
            </h3>
            {response?.successful && (
              <p>
                Thanks for your interest. We will get back to you when we have
                more information.
              </p>
            )}
            {response === null && (
              <div className="flex items-center gap-12">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 h-16 flex-1 rounded-lg border bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <div className="flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                  <Button type="submit">
                    <span className="sr-only sm:not-sr-only">
                      Sign up today
                    </span>
                    <span className="sm:hidden">
                      <ArrowRightIcon className="h-6 w-6" />
                    </span>
                  </Button>
                </div>
              </div>
            )}
            {response?.successful === false && (
              <h1>
                We had a problem adding your email.
                <br />
                Just email us at{' '}
                <a href="mailto:hello@eexconf.org?subject=I'd%20like%20to%20hear%20more!">
                  hello@eexconf.org
                </a>
              </h1>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}
