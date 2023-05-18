import decode from 'jwt-decode';
import { cookies } from 'next/headers'

type User = {
  sub: string;
  name: string;
  avatarUrl: string;
}

export const getUser = () => {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = decode(token)

  return user
}