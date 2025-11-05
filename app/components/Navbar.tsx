import AuthButton from './AuthButton'

export default function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-light tracking-tight text-foreground">
            Kon
          </a>
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}

