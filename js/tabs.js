const tabs = (option) => {
    
    const {
        selectorTabsButtons,
        activeClassButton,
        selectorTabsElement,
        activeClassTab,
        callback = () => {},
    } = option;

    const tabsBtns = document.querySelectorAll(selectorTabsButtons);
    const tabsElems = document.querySelectorAll(selectorTabsElement);

    tabsBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            for (let i = 0; i < tabsBtns.length; i++) {
                if (tabsBtns[i] === btn) {
                    tabsBtns[i].classList.add(activeClassButton);
                    tabsElems[i].classList.add(activeClassTab);
                } else {
                    tabsBtns[i].classList.remove(activeClassButton);
                    tabsElems[i].classList.remove(activeClassTab);
                }
            }
            console.log(btn, activeClassButton, activeClassTab)
        });
    });


};

export default tabs;



