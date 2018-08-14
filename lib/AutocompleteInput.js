import React, { Component } from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	TouchableWithoutFeedback,
} from 'react-native';
import {
	func,
	number,
	object,
} from 'prop-types';
import debounce from 'lodash.debounce';

class AutocompleteInput extends Component {
	// static propTypes = {
	// 	custom: object,
	// 	debounce: number,
	// 	onChangeText: func.isRequired,
	// 	onChangeTextSettle: func.isRequired
	// }

	_input

	constructor(props) {
		super(props);

		this._inputRef = (node) => {
			this._input = node;
		}
	}

	render() {
		const {custom = {}, style: inputStyle, inputContainerStyle, ...props} = this.props;

		return (
			<TouchableWithoutFeedback onPress={this._inputFocus}>
				<View style={[style.container, custom.container, inputContainerStyle]}>
					<TextInput
						{...props}
						ref={this.inputRef}
						onChangeText={this._handleChangeText}
						underlineColorAndroid="transparent"
						style={[style.input, custom.input, inputStyle]} />
				</View>
			</TouchableWithoutFeedback>
		);
	}

	_inputFocus = () => {
		this._input.focus();
	}

	_handleChangeText = (value) => {
		this.props.onChangeText(value);
		this._settle();
	}

	_settle = debounce(() => {
		this.props.onChangeTextSettle();
	}, this.props.debounce);
}

AutocompleteInput.propTypes = {
	custom: object,
	debounce: number,
	onChangeText: func.isRequired,
	onChangeTextSettle: func.isRequired
}

export const style = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		// height: 44,
	},

	input: {
		// height: '100%',
	}
});

export default AutocompleteInput;
