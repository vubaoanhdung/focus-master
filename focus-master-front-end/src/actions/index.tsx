export const addTask = (data: any) => {
    return {
        type: "ADD_TASK",
        payload: data,
    };
};
