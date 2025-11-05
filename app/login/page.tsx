import { signIn } from '@/app/actions/auth'
import Link from 'next/link'
import { Suspense } from 'react'

async function LoginForm({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams
  const error = params.error

  return (
    <div className="min-h-screen bg-beige-50 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="max-w-md w-full">
        <div className="bg-beige-100 rounded-lg p-6 sm:p-8 border border-beige-200 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-beige-950 mb-2">Iniciar sesión</h1>
          <p className="text-beige-700 text-sm sm:text-base mb-6 sm:mb-8">Ingresa a tu cuenta</p>
          
          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-beige-200 border border-beige-400 rounded-md">
              <p className="text-xs sm:text-sm text-beige-900 break-words">{error}</p>
            </div>
          )}
          
          <form action={signIn} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-beige-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-beige-50 border border-beige-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500 focus:border-transparent text-beige-900"
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
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-beige-50 border border-beige-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500 focus:border-transparent text-beige-900"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-4 sm:px-6 py-2.5 sm:py-2 bg-beige-600 text-beige-50 rounded-md hover:bg-beige-700 transition-colors font-medium text-sm sm:text-base"
            >
              Iniciar sesión
            </button>
          </form>
          
          <div className="mt-5 sm:mt-6 text-center">
            <p className="text-beige-700 text-xs sm:text-sm">
              ¿No tienes una cuenta?{' '}
              <Link href="/register" className="text-beige-600 hover:text-beige-700 font-medium">
                Regístrate
              </Link>
            </p>
          </div>
          
          <div className="mt-3 sm:mt-4 text-center">
            <Link href="/" className="text-beige-600 hover:text-beige-700 text-xs sm:text-sm">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage({
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
      <LoginForm searchParams={searchParams} />
    </Suspense>
  )
}

