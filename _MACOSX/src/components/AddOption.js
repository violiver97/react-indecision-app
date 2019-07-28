import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
    }
    handleAddOptions = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        this.setState(() => ({ error: error }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form 
                className="add-option"
                onSubmit={this.handleAddOptions}>
                    <input className="add-option__input" type="text" name="option" id="ipt" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
