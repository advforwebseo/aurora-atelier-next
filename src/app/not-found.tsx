"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <p className="text-4xl tracking-wide text-gray-900">Page not found</p>

      <p className="max-w-md text-lg text-gray-500">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
    </div>
  );
}
