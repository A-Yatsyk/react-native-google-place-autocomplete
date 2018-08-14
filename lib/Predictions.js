import React, { PureComponent } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import {
	array,
	func,
	style
} from 'prop-types';
import Prediction from './Prediction';

class Predictions extends PureComponent {
	// static propTypes = {
	// 	predictions: array.isRequired,
	// 	onPressPrediction: func
	// }

	// static defaultProps = {
	// 	predictions: []
	// }

	constructor(props) {
		super(props);
	}

	render() {
		const { onPressPrediction, style: PredictionStyle, iconSource } = this.props;

		return (
			<View style={styles.container}>
				{
					this.props.predictions.map(prediction => {
						return (
							<Prediction
								source={iconSource}
								PredictionStyle={PredictionStyle}
								key={prediction.place_id}
								prediction={prediction}
								title={prediction.structured_formatting.main_text}
								description={prediction.structured_formatting.secondary_text}
								onPress={onPressPrediction} />
						);
					})
				}
			</View>
		);
	}
}

Predictions.propTypes = {
	predictions: array.isRequired,
	onPressPrediction: func,
	// style: style,
	iconSource: style
};

Predictions.defaultProps = {
	predictions: []
};

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
});

export default Predictions;
