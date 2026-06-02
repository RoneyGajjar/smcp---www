import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // 1. Initialize the response object
  let supabaseResponse = NextResponse.next({
    request,
  })

  // 2. Create the Supabase server client to read cookies securely
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 3. Fetch the current user session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 4. THE GUARDRAIL: If no user exists AND they are trying to enter the userjourney...
  if (!user && request.nextUrl.pathname.startsWith('/userjourney')) {
    const url = request.nextUrl.clone()
    url.pathname = '/login' // Redirect to your login page

    // Pro-tip: Pass the intended destination so you can route them back after they log in
    url.searchParams.set('next', '/userjourney')

    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

// 5. Tell Next.js which paths this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}


//okay