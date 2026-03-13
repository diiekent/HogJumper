exports.handler = async (event) => {
  const { code } = JSON.parse(event.body);
  const res = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: '1481762798210908301',
      client_secret: 'GYbkmOL_gHsLUCtCdDkacjQgfb6OFXjc',
      grant_type: 'authorization_code',
      code,
    }),
  });
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ access_token: data.access_token }),
  };
};
