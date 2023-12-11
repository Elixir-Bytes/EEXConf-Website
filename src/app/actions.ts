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
  const url = 'https://api.tito.io/v3/eexconf/zagreb-2024/interested_users'
  const apiToken = process.env.TITO_API_TOKEN
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Token token=${apiToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        interested_user: {
          email,
        },
      }),
    })
    const body = await res.json()

    return { body, status: res.status, successful: res.ok }
  } catch (e) {
    console.log('Error while making Tito request:', e)
    return { status: 500, body: null, successful: false }
  }
}
