
export default function Alert({ message }: any) {
  if (!message) return <></>;

  return (
    <div className="bg-green-100 rounded-md p-3 flex h-16 mt-2 animate-pulse		">
      <svg
        className="h-7 w-7 self-center text-green-500 mr-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>

      <div className="text-green-500">
        <div className="font-medium text-base align-middle">{message}</div>
      </div>
    </div>
  );
}
