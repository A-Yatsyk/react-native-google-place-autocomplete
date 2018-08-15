import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
	View,
	TouchableWithoutFeedback
} from 'react-native';
import {
    func,
    number,
    object,
} from 'prop-types';
import debounce from 'lodash.debounce';

class AutocompleteInput extends Component {
    static propTypes = {
        custom: object,
        debounce: number,
        onChangeText: func.isRequired,
        onChangeTextSettle: func.isRequired
	}
	
	input

    constructor(props) {
		super(props);
	}
	
	inputRef = (node) => {
		this.input = node;
	}

    render() {
        const {custom = {}, ...props} = this.props;

        return (
			<TouchableWithoutFeedback onPress={() => this.input.focus()}>
				<View style={[style.container, custom.container]}>
					<TextInput
						ref={this.inputRef}
						{...props}
						underlineColorAndroid="transparent"
						onChangeText={this._handleChangeText}
						style={[style.input, custom.input]} />
				</View>
			</TouchableWithoutFeedback>
        );
    }

    _handleChangeText = (value) => {
        this.props.onChangeText(value);
        this._settle();
    }

    _settle = debounce(() => {
        this.props.onChangeTextSettle();
    }, this.props.debounce);
}

export const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
		paddingBottom: 10,
		paddingTop: 10,
		marginBottom: 10,
		borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    input: {
    }
});

export default AutocompleteInput;