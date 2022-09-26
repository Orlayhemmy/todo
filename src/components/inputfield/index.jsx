const InputField = ({
  placeholder,
  type='text',
  icon
}) => {
  return (
    <div className="inputfield">
      <input type={type} placeholder={placeholder} />
      {icon}
    </div>
  )
}

export default InputField
