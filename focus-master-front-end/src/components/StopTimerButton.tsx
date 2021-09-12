import { FaPause } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
export const StopTimerButton = (
    props: JSX.IntrinsicAttributes & IconBaseProps
) => {
    return (
        <FaPause {...props} cursor="pointer" size="4em" color="#ddd"></FaPause>
    );
};
