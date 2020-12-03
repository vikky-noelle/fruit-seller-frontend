
const PrimaryInput = ({ value, onKeyPress, onChange, placeholder, type, className }) => {
    return (
        <input
            className={className}
            type={type}
            value={value}
            onKeyPress={onKeyPress}
            onChange={onChange}
            placeholder={placeholder} />
    );
};

export default PrimaryInput;