export async function POST(request: Request) {
  const data = await request.formData();
  const suppliedUsername = data.get("username");
  const suppliedPassword = data.get("password");
  if(suppliedUsername === process.env.USERNAME && suppliedPassword === process.env.PASSWORD) {
    return Response.json({ success: true });
  } else {
    return Response.json({ success: false });
  }
}

