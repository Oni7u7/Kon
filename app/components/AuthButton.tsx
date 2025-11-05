'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { signOut } from '@/app/actions/auth'

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Verificar usuario actual
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // Escuchar cambios en la autenticación
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await signOut()
    router.push('/auth')
  }

  if (loading) {
    return null
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm" style={{ color: 'var(--color-earth-600)' }}>
          {user.email}
        </span>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
          style={{
            backgroundColor: 'var(--color-earth-500)',
            color: 'var(--color-earth-50)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-earth-600)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-earth-500)'
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => router.push('/auth')}
      className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
      style={{
        backgroundColor: 'var(--color-earth-500)',
        color: 'var(--color-earth-50)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-earth-600)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-earth-500)'
      }}
    >
      Iniciar Sesión
    </button>
  )
}

