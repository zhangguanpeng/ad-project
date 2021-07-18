import React, { Component } from 'react';
// import './style.scss';

interface Props { }

class IndexPage extends Component<Props> {
    render() {
        return (
            <div className="box">
                Hello, React.
                <span>here is index page.</span>
            </div>
        );
    }
}

export default IndexPage;
