import Link from 'next/link'
import { Suspense } from 'react'

async function ErrorMessage({ searchParams }: { searchParams: Promise<{ message?: string }> }) {
  const params = await searchParams
  const message = params.message || 'Ocurrió un error'

  return (
    <div className="min-h-screen bg-beige-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-beige-100 rounded-lg p-8 border border-beige-200 shadow-sm text-center">
          <h1 className="text-3xl font-bold text-beige-950 mb-4">Error</h1>
          <p className="text-beige-700 mb-6">{message}</p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-beige-600 text-beige-50 rounded-md hover:bg-beige-700 transition-colors font-medium"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-beige-50 flex items-center justify-center">
        <p className="text-beige-700">Cargando...</p>
      </div>
    }>
      <ErrorMessage searchParams={searchParams} />
    </Suspense>
  )
}

