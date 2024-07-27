import PropTypes from "prop-types";

const FormInput = ({ type, name, placeholder, register }) => {
  return (
    <>
      <textarea
        id={name}
        name={name}
        type={type}
        rows="3"
        placeholder={placeholder}
        autoComplete="off"
        className={`px-2 pb-0 rounded  bg-transparent text-gray-700  placeholder-gray-500 block w-full outline-none relative`}
        {...register}
      ></textarea>
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default FormInput;
