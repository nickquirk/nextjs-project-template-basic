import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function proxy(req: NextRequest) {
  // Example: Protect only /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');

    if (!basicAuth) {
      return promptBasicAuth();
    }

    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // TODO: Replace with secure environment variables (e.g., process.env.ADMIN_USER)
    const validUser = 'admin';
    const validPass = 'password'; 

    if (user !== validUser || pwd !== validPass) {
      return promptBasicAuth();
    }
  }

  return NextResponse.next();
}

function promptBasicAuth() {
  return new NextResponse('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
