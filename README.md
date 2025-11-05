# Kon

Aplicación minimalista con backend en Supabase y frontend en Next.js.

## Características

- ✅ Backend con Supabase (autenticación y base de datos)
- ✅ Frontend minimalista con Next.js 16 y Tailwind CSS 4
- ✅ Paleta de colores beige/café elegante
- ✅ Autenticación completa (login, registro, logout)
- ✅ Diseño responsive

## Configuración

### 1. Instalar dependencias

```bash
npm install
# o
pnpm install
```

### 2. Configurar Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Ve a Settings > API
3. Copia la URL del proyecto y la clave anónima (anon key)
4. Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Paleta de colores

El proyecto utiliza una paleta minimalista de tonos beige y café:

- `beige-50`: #F5F4F1
- `beige-100`: #E7E2DA
- `beige-200`: #D1C7B7
- `beige-300`: #B6A58E
- `beige-400`: #A1886E
- `beige-500`: #927860
- `beige-600`: #836755
- `beige-700`: #654D43
- `beige-800`: #57423C
- `beige-900`: #4C3B37
- `beige-950`: #2B1F1D

## Estructura del proyecto

```
kon/
├── app/
│   ├── actions/
│   │   └── auth.ts          # Acciones de servidor para autenticación
│   ├── login/
│   │   └── page.tsx         # Página de inicio de sesión
│   ├── register/
│   │   └── page.tsx         # Página de registro
│   ├── globals.css          # Estilos globales y paleta de colores
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── lib/
│   └── supabase/
│       ├── client.ts        # Cliente de Supabase para el cliente
│       └── server.ts        # Cliente de Supabase para el servidor
├── middleware.ts            # Middleware de Next.js para Supabase
└── package.json
```

## Tecnologías

- [Next.js](https://nextjs.org) - Framework de React
- [Supabase](https://supabase.com) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com) - Framework de CSS
- [TypeScript](https://www.typescriptlang.org) - Tipado estático

## Licencia

MIT
