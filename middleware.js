export default withClerkMiddleware((req) => {
  const publicPaths = ["/", "/about", "/blog", "/movies", "/upcoming"];
  if (publicPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }
  // অন্য page হলে Clerk automatically protect করে
  return NextResponse.next();
});
