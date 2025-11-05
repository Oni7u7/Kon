# Kon

Aplicación minimalista construida con Next.js y Supabase, utilizando una paleta de colores tierra/marrón.

## Características

- **Frontend**: Next.js 16 con React 19 y TypeScript
- **Backend**: Supabase para autenticación y base de datos
- **Estilos**: Tailwind CSS v4 con paleta de colores personalizada
- **Diseño**: Minimalista y limpio

## Paleta de Colores

El proyecto utiliza una paleta de colores tierra/marrón con 11 tonos diferentes (50-950), implementada como variables CSS personalizadas.

## Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Obtén tu URL del proyecto y la clave anónima (anon key)
3. Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

```
kon/
├── app/                    # Páginas y componentes de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales y paleta de colores
├── lib/
│   ├── supabase/          # Clientes de Supabase (cliente y servidor)
│   ├── types/             # Tipos TypeScript
│   └── utils/             # Utilidades
└── public/                # Archivos estáticos
```

## Clientes de Supabase

El proyecto incluye dos clientes de Supabase:

- **Cliente del navegador**: `lib/supabase/client.ts` - Para uso en componentes del cliente
- **Cliente del servidor**: `lib/supabase/server.ts` - Para uso en Server Components y API Routes

## Desarrollo

Para editar la página principal, modifica `app/page.tsx`. Los cambios se reflejan automáticamente en el navegador gracias a Hot Module Replacement (HMR).

## Tecnologías

- [Next.js](https://nextjs.org)
- [Supabase](https://supabase.com)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://react.dev)
