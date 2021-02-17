export function showModal(item) {
    console.log("it's working");
    return {
        type: 'SHOW_MODAL_CONFIRM',
        payload: item
    }
}

export function hideModal(item) {
    console.log("it's working");
    return {
        type: 'HIDE_MODAL_CONFIRM',
        payload: item
    }
}