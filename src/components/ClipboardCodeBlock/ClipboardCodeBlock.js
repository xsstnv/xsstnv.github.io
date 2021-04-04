import React from 'react';
import classes from './CodeBlock.module.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class ClipboardCodeBlock extends React.Component {

    state = {
        copied: false,
        message: null,
    };

    componentDidUpdate(){
        if(this.state.message) {
            setTimeout(() => this.setState({message: null}), 1500);
        }
    }

    render() {

        return (
            <div className={classes.Block}>                
                <CopyToClipboard text={this.props.code} onCopy={() => !this.state.message && this.setState({copied: true, message:'Copied'})}>
                    <pre className={classes.Code}> 
                        <code> 
                            { !this.state.message ? this.props.code : "Copied!" }
                        </code>
                    </pre>
                </CopyToClipboard>
            </div>
        );
    }
}

export default ClipboardCodeBlock;