import { NextResponse, NextRequest } from 'next/server'
export const dynamic = 'force-dynamic' // defaults to force-static
type ClientResponse = {
  status: number
  body: null | object
  successful: boolean
}
export async function POST(
  request: NextRequest,
): Promise<NextResponse<ClientResponse>> {
  try {
    const requestBody = await request.json()
    const email = requestBody.email
    const url = 'https://api.tito.io/v3/eexconf/zagreb-2024/interested_users'
    const apiToken = process.env.TITO_API_TOKEN
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

    return NextResponse.json({ body, status: res.status, successful: res.ok })
  } catch (e) {
    console.log('Error while making Tito request:', e)
    return NextResponse.json({ status: 500, body: null, successful: false })
  }
}
