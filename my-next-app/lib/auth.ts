import { cookies } from 'next/headers'

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('admin_auth')
  return authToken?.value === 'authenticated'
}

export async function setAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.set('admin_auth', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
}

