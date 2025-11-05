import { signUp } from '@/app/actions/auth'
import Link from 'next/link'
import { Suspense } from 'react'

async function RegisterForm({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams
  const error = params.error

  return (
    <div className="min-h-screen bg-beige-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-beige-100 rounded-lg p-8 border border-beige-200 shadow-sm">
          <h1 className="text-3xl font-bold text-beige-950 mb-2">Registrarse</h1>
          <p className="text-beige-700 mb-8">Crea una nueva cuenta</p>
          
          {error && (
            <div className="mb-6 p-4 bg-beige-200 border border-beige-400 rounded-md">
              <p className="text-sm text-beige-900">{error}</p>
            </div>
          )}
          
          <form action={signUp} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-beige-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-beige-50 border border-beige-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500 focus:border-transparent text-beige-900"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-beige-900 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                className="w-full px-4 py-2 bg-beige-50 border border-beige-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500 focus:border-transparent text-beige-900"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-beige-600">Mínimo 6 caracteres</p>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-2 bg-beige-600 text-beige-50 rounded-md hover:bg-beige-700 transition-colors font-medium"
            >
              Registrarse
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-beige-700 text-sm">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="text-beige-600 hover:text-beige-700 font-medium">
                Inicia sesión
              </Link>
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <Link href="/" className="text-beige-600 hover:text-beige-700 text-sm">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-beige-50 flex items-center justify-center">
        <p className="text-beige-700">Cargando...</p>
      </div>
    }>
      <RegisterForm searchParams={searchParams} />
    </Suspense>
  )
}

