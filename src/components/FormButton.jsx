import PropTypes from "prop-types";

const FormButton = ({ label }) => {
  return (
    <div className=" flex items-center justify-center ">
      <button className="px-2 py-2  rounded-lg bg-cyan-800 text-gray-100 hover:bg-red-400 hover:text-gray-300  font-bold text-md w-full">
        {label}
      </button>
    </div>
  );
};

FormButton.propTypes = {
  label: PropTypes.string,
};

export default FormButton;
