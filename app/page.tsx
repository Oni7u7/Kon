import { createClient } from '@/lib/supabase/server'
import { signOut } from '@/app/actions/auth'
import Link from 'next/link'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-beige-50 relative overflow-hidden">
      {/* Efecto de fondo con gradiente sutil y borroso */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-beige-100/40 blur-[100px] rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-beige-50/60 blur-[80px] rounded-full" />
      </div>
      
      {/* Contenedor principal */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-6 py-6 flex justify-between items-center z-10">
          {/* Logo pequeño en la esquina superior izquierda */}
          <Link href="/" className="text-lg font-semibold text-beige-950">
            Kon
          </Link>
          
          {/* Botón de inicio de sesión o cerrar sesión en la esquina superior derecha */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-beige-700 hidden sm:inline">
                {user.email}
              </span>
              <form action={signOut}>
                <button
                  type="submit"
                  className="px-6 py-2 bg-beige-700 text-white rounded-lg hover:bg-beige-800 transition-colors font-medium text-sm"
                >
                  Cerrar Sesión
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 bg-beige-700 text-white rounded-lg hover:bg-beige-800 transition-colors font-medium text-sm"
            >
              Iniciar Sesión
            </Link>
          )}
        </header>

        {/* Contenido principal centrado */}
        <main className="flex-1 flex items-center justify-center z-10">
          <h1 className="text-8xl md:text-9xl font-bold text-beige-950 tracking-tight">
            Kon
          </h1>
        </main>
      </div>
    </div>
  )
}
