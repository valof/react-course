console.log('Hello World');

// JSX - JavaScript XML

const appRoot = document.getElementById('app');
let visible = false;

function onVisible() {
    visible = !visible;
    renderInDecitionApp();  
}

const renderInDecitionApp = () => {
    const template = <div> 
        <h1>Visibilty Toggle app </h1>
        <button onClick={onVisible}>{!visible? "Show": "Hide"} Details</button>
        <p hidden={!visible}>Some details are here!!!</p>
        </div>
     ReactDOM.render(template, appRoot);
}

function onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderInDecitionApp();
    }
}

renderInDecitionApp();