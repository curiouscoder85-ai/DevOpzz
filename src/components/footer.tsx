export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-6 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
      <div className="mx-auto max-w-7xl">
        <p>&copy; {new Date().getFullYear()} Pranav. All rights reserved.</p>
      </div>
    </footer>
  );
}
