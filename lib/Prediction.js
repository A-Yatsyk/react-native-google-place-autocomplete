import React, { PureComponent } from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import {
	any,
	func,
	string,
	object,
} from 'prop-types';

class Prediction extends PureComponent {
	// static propTypes = {
	// 	prediction: any,
	// 	title: string,
	// 	description: string,
	// 	onPress: func.isRequired
	// }

	constructor(props) {
		super(props);
	}

	renderIcon = (source, style = {}) => {
		const { width = 0 } = style;
		if (!source) return;
		return (
			<AutoHeightImage width={width} source={source} />
		);
	}

	render() {
		const { PredictionStyle = {}, source } = this.props;
		const coma = (PredictionStyle.item && PredictionStyle.item.flexDirection === 'row');
		return (
			<TouchableOpacity style={[style.wrapper, PredictionStyle.wrapper]} onPress={this._handlePress}>
				{this.renderIcon(source, PredictionStyle.icon)}
				<View style={[style.item, PredictionStyle.item]}>
					<Text style={style.title}>{this.props.title}{coma && ', '}</Text>
					<Text style={style.description}>{this.props.description}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	_handlePress = () => {
		this.props.onPress(this.props.prediction);
	}
}

Prediction.propTypes = {
	prediction: any,
	title: string,
	description: string,
	onPress: func.isRequired,
	// PredictionStyle: object
};

export const style = StyleSheet.create({
	item: {
		// borderTopColor: 'rgba(0, 0, 0, 0.2)',
		// borderTopWidth: StyleSheet.hairlineWidth,
		// paddingBottom: 10,
		paddingLeft: 10,
		// paddingRight: 10,
		// paddingTop: 10,
	},

	wrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderTopColor: 'rgba(0, 0, 0, 0.2)',
		// borderTopWidth: StyleSheet.hairlineWidth,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
	},

	description: {
		// color: 'grey'
	},
});

export default Prediction;
