interface Props {
    name: string
}
const HeaderButton = ({ name }: Props) => {
    return (
        <button
            className="float-right border-solid border-2 py-1 -py-1 px-2 -px-2 border-black rounded-lg mr-4">
            {name}
        </button>

    );
};

export default HeaderButton;