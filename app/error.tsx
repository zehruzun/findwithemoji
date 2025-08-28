"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-xl font-semibold">Bir hata oluştu!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Tekrar Dene
      </button>
    </div>
  );
}
