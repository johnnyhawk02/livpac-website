// functions/api/auth.js - Handles GitHub OAuth callback for Decap CMS

export async function onRequestPost({ request }) {
  try {
    const body = await request.json();
    const { code, provider } = body;

    if (provider !== 'github' || !code) {
      console.error('Invalid request: Missing code or incorrect provider');
      return new Response(JSON.stringify({ 
        error: 'Invalid request',
        message: 'Missing code or incorrect provider' 
      }), { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Exchange the code for an access token with GitHub
    console.log('Exchanging code for token with GitHub');
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('GitHub OAuth Error:', data.error_description);
      return new Response(JSON.stringify({ 
        error: 'GitHub authentication failed',
        github_error: data.error,
        github_error_description: data.error_description
      }), { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    console.log('Authentication successful, returning token');
    // Return the token (and potentially other info if needed)
    return new Response(JSON.stringify({ 
      token: data.access_token,
      provider: 'github'
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });

  } catch (error) {
    console.error('Auth function error:', error.message);
    return new Response(JSON.stringify({ 
      error: 'Authentication service error',
      message: error.message
    }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// Handle OPTIONS requests for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
} 