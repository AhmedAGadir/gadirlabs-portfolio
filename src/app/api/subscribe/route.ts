import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required', status: 400 })
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_DC

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    )

    if (!response.ok) {
      return NextResponse.json({
        error: 'There was an error subscribing to the newsletter.',
        status: 400,
      })
    }

    const data = await response.json()

    return NextResponse.json({ data, status: 200 })
  } catch (error) {
    return NextResponse.json({ error, status: 500 })
  }
}
