'use server'
type ClientResponse = {
  status: number
  body: null | object
  successful: boolean
}
export async function addInterest(
  prevState: any,
  formData: FormData,
): Promise<ClientResponse> {
  const email = formData.get('email')
  const url = '/api/register_interest/'
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
