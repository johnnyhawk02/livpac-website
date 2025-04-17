// functions/api/auth.js - Handles GitHub OAuth callback for Decap CMS

export async function onRequestPost({ request, env }) {
  const body = await request.json();
  const { code, provider } = body;

  if (provider !== 'github' || !code) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }

  // Exchange the code for an access token with GitHub
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID, // Uses environment variable
        client_secret: env.GITHUB_CLIENT_SECRET, // Uses environment variable
        code: code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('GitHub OAuth Error:', data.error_description);
      return new Response(JSON.stringify({ error: 'GitHub authentication failed' }), { status: 500 });
    }

    // Return the token (and potentially other info if needed)
    // Decap CMS expects an object with a 'token' property
    return new Response(JSON.stringify({ token: data.access_token }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Auth function error:', error);
    return new Response(JSON.stringify({ error: 'Authentication service error' }), { status: 500 });
  }
} 