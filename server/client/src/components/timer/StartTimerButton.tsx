import { FaPlay } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
export const StartTimerButton = (
    props: JSX.IntrinsicAttributes & IconBaseProps,
) => {
    return (
        <FaPlay {...props} cursor="pointer" size="4vw" color="#ddd"></FaPlay>
    );
};
