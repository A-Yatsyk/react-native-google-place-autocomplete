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

	render() {
		const { PredictionStyle = {}, source } = this.props;
		const { width = 0, ...rest } = PredictionStyle;
		return (
			<TouchableOpacity style={[style.wrapper, PredictionStyle.wrapper]} onPress={this._handlePress}>
				{
					source && <AutoHeightImage width={width} style={...rest} source={source} />
				}
				<View style={PredictionStyle.item} style={style.item}>
					<Text style={style.title}>{this.props.title}</Text>
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
	onPress: func.isRequired
}

Prediction.defaultProps = {
	source: null
};

export const style = StyleSheet.create({
	item: {
		borderTopColor: 'rgba(0, 0, 0, 0.2)',
		borderTopWidth: StyleSheet.hairlineWidth,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
	},

	wrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	description: {
		color: 'grey'
	},
});

export default Prediction;
