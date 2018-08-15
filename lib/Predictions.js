import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
	any,
    array,
	func,
	number,
} from 'prop-types';
import Prediction from './Prediction';

class Predictions extends Component {
    static propTypes = {
        predictions: array.isRequired,
		onPressPrediction: func,
		source: any,
		imageWidth: number,
    }

    static defaultProps = {
        predictions: []
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                {
                    this.props.predictions.map(prediction => {
                        return (
                            <Prediction
								source={this.props.source}
								imageWidth={this.props.imageWidth}
                                key={prediction.place_id}
                                prediction={prediction}
                                title={prediction.structured_formatting.main_text}
                                description={prediction.structured_formatting.secondary_text}
                                onPress={this.props.onPressPrediction} />
                        );
                    })
                }
            </View>
        );
    }
}

export const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});

export default Predictions;