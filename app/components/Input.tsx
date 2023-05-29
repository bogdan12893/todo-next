"use client";

export default function Input({ type, value, placeholder, onChange }) {
  return (
    <div>
      <input
        className="w-full bg-slate-300 py-3 px-3 text-black rounded-lg outline-none focus:ring focus:ring-yellow-600"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
