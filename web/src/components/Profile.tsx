import { getUser } from '@/app/lib/auth'
import Image from 'next/image'

export const Profile = () => {
  const {name, avatarUrl} = getUser()
  return (
      <div className="flex items-center gap-3 text-left">
          <Image
          height={40}
          width={40}
          src={avatarUrl}
          alt={`Avatar do ${name}`}
          className='w-10 h-10 rounded-full'
          />

          <p className='max-w-[140px] text-sm leading-snug'>
            {name}
            <a
            href="/api/auth/logout" 
            className='block text-red-400 hover:text-red-300 transition-colors'>
              Quero Sair
            </a>
          </p>
      </div>
  )
}