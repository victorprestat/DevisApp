import React from 'react';
import ReactDOM from 'react-dom';
import AppSnackbar from './components/AppSnackbar';
import TodoContextProvider from './contexts/TodoContext';
import TodoTable from './components/TodoTable';
import DefaultThemeProvider from './components/themes/DefaultThemeProvider';

class App extends React.Component {

    render() {
        return (
            <TodoContextProvider>            
                <TodoTable/>
                <AppSnackbar/>
            </TodoContextProvider>
        );
    }
}

ReactDOM.render(
<DefaultThemeProvider>
<App/>
</DefaultThemeProvider>
    
    , document.getElementById('root'));