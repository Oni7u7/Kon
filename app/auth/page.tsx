'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      if (isLogin) {
        // Login
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        router.push('/')
        router.refresh()
      } else {
        // Registro
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })

        if (error) throw error

        setMessage('¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.')
        setEmail('')
        setPassword('')
      }
    } catch (error: any) {
      setError(error.message || 'Ocurrió un error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-surface border border-border rounded-lg p-8 shadow-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-light tracking-tight text-foreground mb-2">
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </h1>
            <p className="text-sm" style={{ color: 'var(--color-earth-600)' }}>
              {isLogin
                ? 'Ingresa a tu cuenta'
                : 'Crea una nueva cuenta'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-earth-700)' }}
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2"
                style={{
                  '--tw-ring-color': 'var(--color-earth-400)',
                } as React.CSSProperties}
                placeholder="tu@correo.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-earth-700)' }}
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2"
                style={{
                  '--tw-ring-color': 'var(--color-earth-400)',
                } as React.CSSProperties}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div
                className="p-3 rounded-md text-sm"
                style={{
                  backgroundColor: 'var(--color-earth-100)',
                  color: 'var(--color-earth-700)',
                }}
              >
                {error}
              </div>
            )}

            {message && (
              <div
                className="p-3 rounded-md text-sm"
                style={{
                  backgroundColor: 'var(--color-earth-100)',
                  color: 'var(--color-earth-600)',
                }}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: 'var(--color-earth-500)',
                color: 'var(--color-earth-50)',
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = 'var(--color-earth-600)'
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = 'var(--color-earth-500)'
                }
              }}
            >
              {loading ? 'Cargando...' : isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError(null)
                setMessage(null)
              }}
              className="text-sm"
              style={{ color: 'var(--color-earth-600)' }}
            >
              {isLogin
                ? '¿No tienes cuenta? Regístrate'
                : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

