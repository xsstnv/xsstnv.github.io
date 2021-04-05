import React from 'react';
import ReactMarkdown from 'react-markdown';
import emoji from 'emoji-dictionary';

import CodeBlock from "../CodeBlock/CodeBlock";
import { config } from '../../config';
import classes from './MarkdownReader.module.css';

class MarkdownReader extends React.Component {

    _isMounted = false;

    state = {
        data: null,
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;

        if (this.props.path) {
            fetch(config[process.env.REACT_APP_ENV].baseURL + this.props.path).then((response) => response.text()).then(text => {
                if (this._isMounted) {
                    this.setState({ data: text });
                }
            })
        }
    }

    emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))

    render() {

        if (!this.state.data) {
            return <h3>Loading...</h3>
        }

        return (
            <div className={classes.Content}>
                <ReactMarkdown source={this.state.data}
                    renderers={{
                        text: this.emojiSupport,
                        code: CodeBlock,
                    }}
                />
            </div>
        )
    }
}

export default MarkdownReader;