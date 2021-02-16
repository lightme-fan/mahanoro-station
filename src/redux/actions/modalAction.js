export function showModal(item) {
    console.log("it's working");
    return {
        type: 'SHOW_MODAL_CONFIRM',
        payload: item
    }
}