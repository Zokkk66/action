interface LiveProjectButtonProps {
  className?: string;
}

export default function LiveProjectButton({ className }: LiveProjectButtonProps) {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-3.5 md:text-base ${className ?? ''}`}
    >
      Live Project
    </button>
  );
}
