const scrollController = {
    disabledScroll() {
        document.body.style.cssText = `
            overflow: hidden;
        `;
    },
    enabledScroll() {
        document.body.style.cssText = '';
    }
}

export default scrollController;