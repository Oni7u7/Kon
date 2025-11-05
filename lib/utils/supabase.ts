/**
 * Utilidades para trabajar con Supabase
 */

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
}

export function validateSupabaseConfig() {
  if (!supabaseConfig.url || !supabaseConfig.anonKey) {
    throw new Error(
      'Las variables de entorno de Supabase no están configuradas. ' +
      'Por favor, crea un archivo .env.local con NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY'
    )
  }
}

