import React, { Component } from 'react';
import './style.scss';

interface Props { }

class App extends Component<Props> {
    render() {
        return (
            <div className="box">
                Hello, React.
                <span>I am Jack. I am 22 years old.</span>
            </div>
        );
    }
}

export default App;
