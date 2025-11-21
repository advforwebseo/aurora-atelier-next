"use client";

export default function Error() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-2 max-w-md">
        An unexpected error occurred. Please try again or reload the page.
      </p>
    </div>
  );
}
