import { getCurrentUser } from '@/lib/utils/auth'
import Navbar from './components/Navbar'

export default async function Home() {
  const user = await getCurrentUser()

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-light tracking-tight text-foreground">
                Kon
              </h1>
              
              {user && (
                <div className="mt-8 p-4 rounded-md" style={{ backgroundColor: 'var(--color-earth-100)' }}>
                  <p className="text-sm" style={{ color: 'var(--color-earth-700)' }}>
                    Bienvenido, <strong>{user.email}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
