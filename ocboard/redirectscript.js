function navigateToPage(select) {
    let selectedValue = select.value;
    if (selectedValue !== "#") {
        window.location.href = selectedValue;
    }
}
