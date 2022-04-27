const Input = ({
  label,
  type = "text",
  placeholder = "",
  autoFocus = false,
  required = false,
  onChange = undefined,
  name = "",
}) => (
  <label>
    <span className="flex mb-1 text-gray-500 text-xs px-0.5">{label}</span>
    <input
      className="rounded-lg h-12 border w-full px-3 py-2 focus:border-yellow-500 outline-none"
      placeholder={placeholder}
      type={type}
      name={name}
      required={required}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  </label>
);
export default Input;
