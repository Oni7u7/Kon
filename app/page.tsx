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
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] md:w-[60%] md:h-[60%] bg-beige-100/40 blur-[80px] md:blur-[100px] rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] md:w-[40%] md:h-[40%] bg-beige-50/60 blur-[60px] md:blur-[80px] rounded-full" />
      </div>
      
      {/* Contenedor principal */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center z-10">
          {/* Logo pequeño en la esquina superior izquierda */}
          <Link href="/" className="text-base sm:text-lg font-semibold text-beige-950">
            Kon
          </Link>
          
          {/* Botón de inicio de sesión o cerrar sesión en la esquina superior derecha */}
          {user ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm text-beige-700 hidden md:inline truncate max-w-[200px]">
                {user.email}
              </span>
              <form action={signOut}>
                <button
                  type="submit"
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-beige-700 text-white rounded-lg hover:bg-beige-800 transition-colors font-medium text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Cerrar Sesión</span>
                  <span className="sm:hidden">Salir</span>
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 sm:px-6 sm:py-2 bg-beige-700 text-white rounded-lg hover:bg-beige-800 transition-colors font-medium text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Iniciar Sesión</span>
              <span className="sm:hidden">Entrar</span>
            </Link>
          )}
        </header>

        {/* Contenido principal centrado */}
        <main className="flex-1 flex items-center justify-center z-10 px-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-beige-950 tracking-tight">
            Kon
          </h1>
        </main>
      </div>
    </div>
  )
}
