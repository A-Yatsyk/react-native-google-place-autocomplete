import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import PropTyeps, {
    any,
    func,
	string,
    number,
    oneOfType,
} from 'prop-types';

import AutoHeightImage from 'react-native-auto-height-image';

class Prediction extends Component {
    static propTypes = {
        prediction: any,
        title: string,
        description: string,
		onPress: func.isRequired,
		imageWidth: number,
        source: any,
        predictionsStyle: oneOfType([number, PropTyeps.style])
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._handlePress}>
                <View style={style.item}>
					{this.props.source && <AutoHeightImage width={this.props.imageWidth} source={this.props.source} />}
                    <Text style={[style.title, this.props.predictionsStyle]}>{this.props.title},&nbsp;{this.props.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _handlePress = () => {
        this.props.onPress(this.props.prediction);
    }
}

export const style = StyleSheet.create({
    item: {
		flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
	},
	
	title: {
		paddingLeft: 10,
	},

    description: {
        color: 'grey'
    },
});

export default Prediction;