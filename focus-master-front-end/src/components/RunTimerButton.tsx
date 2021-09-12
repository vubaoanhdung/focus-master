import { FaPlay } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
export const RunTimerButton = (
    props: JSX.IntrinsicAttributes & IconBaseProps
) => {
    return (
        <FaPlay {...props} cursor="pointer" size="4em" color="#ddd"></FaPlay>
    );
};
