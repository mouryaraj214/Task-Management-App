export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Task Management App</title>
        <link rel="stylesheet" href="/styles/globals.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
