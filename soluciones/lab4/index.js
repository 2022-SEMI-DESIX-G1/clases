((Utils) => {
    const App = {
        htmlElements: {
            form: document.querySelector('#fibonacci'),
            input: document.querySelector('#size'),
            response: document.querySelector('#response')
        },
        init: () => {
            App.htmlElements.form.addEventListener('submit', App.handlers.onFormSubmit);
        },
        utils: {
            ...Utils.methods,
        },
        templates: {
            card: (n) => {
                return `<div class="card">${n}</div>`
            }
        },
        handlers: {
            onFormSubmit: (e) => {
                e.preventDefault();
                App.htmlElements.response.innerHTML = '';
                const n = App.htmlElements.input.value;
                App.utils.fibonacci(n).forEach(number => {
                    App.htmlElements.response.innerHTML += App.templates.card(number);
                })
            }
        }
    };
    App.init();
})(document.Utils);