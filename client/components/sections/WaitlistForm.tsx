import React from "react";

interface WaitlistFormProps {
  email: string;
  error: string | null;
  isSubmitting?: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJoin: () => void | Promise<void>;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  email,
  error,
  isSubmitting = false,
  onEmailChange,
  onJoin,
}) => (
  <div className="relative mx-auto flex w-full max-w-[480px] flex-col items-center">
    <div
      className="flex w-full items-center rounded-full bg-white p-1.5 pl-4"
      style={{
        border: error ? "1px solid #ef4444" : "1px solid #e4e4e8",
        boxShadow: "0 1px 2px rgba(10,10,12,.04), 0 8px 24px rgba(10,10,12,.06)",
      }}
    >
      <svg
        className="mr-2.5 h-[18px] w-[18px] shrink-0 text-blocrate-ink-faint"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <input
        type="email"
        placeholder="Business email"
        value={email}
        onChange={onEmailChange}
        onKeyDown={(e) => e.key === "Enter" && onJoin()}
        className="h-9 min-w-0 flex-1 bg-transparent text-[15px] text-blocrate-ink placeholder:text-blocrate-ink-faint focus:outline-none"
      />
      <button
        type="button"
        onClick={onJoin}
        disabled={isSubmitting}
        className="btn btn-primary shrink-0"
        style={{ fontSize: 14, padding: "10px 20px" }}
      >
        {isSubmitting ? "Joining…" : "Join waitlist"}
      </button>
    </div>
    {error && (
      <p className="mt-2 w-full text-center text-sm text-red-500">{error}</p>
    )}
  </div>
);
