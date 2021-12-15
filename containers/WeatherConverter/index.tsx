import React from 'react';
import { Button, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const SwapIcon = require('../../assets/swap.png');

const styles = {
    root: {
        flex: 1,
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center'
    },
    formRoot: {
        flex: 1,
        flexDirection: 'row' as 'row',
        alignContent: 'center' as 'center'
    },
    formSection: {
        flex: 1,
        flexDirection: 'column' as 'column',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    labelText: {
        margin: 12,
    },
    imageContainer: {
        paddingTop: 20
    },
    image: {
        width: 25,
        height: 25,
    }
}

interface iState {
    degree: string;
    fahrenheit: string;
    order: number;
}

export default class WeatherConverter extends React.Component<any, iState> {
    state = {
        degree: '0',
        fahrenheit: '32',
        order: 0
    }

    onChangeDegree = (val: string) => {
        console.log(val);
        const toInt = Number(val);
        const isProperInt = !isNaN(toInt);
        if (isProperInt) {
            const oppositeVal = (toInt * (9 / 5) + 32);
            this.setState({ degree: val, fahrenheit: oppositeVal.toFixed(4) });
        }
    }

    onChangeFahrenheit = (val: string) => {
        const toInt = Number(val);
        const isProperInt = !isNaN(toInt);
        if (isProperInt) {
            const oppositeVal = (toInt - 32) * (5 / 9);
            this.setState({ fahrenheit: val, degree: oppositeVal.toFixed(4) });
        }
    }

    onChangeOrder = () => this.setState(({ order }) => ({ order: order === 0 ? 1 : 0 }))

    renderD = () => (
        <View style={styles.formSection}>
            <TextInput
                style={styles.input}
                onChangeText={this.onChangeDegree}
                value={this.state.degree}
                placeholder="Degree"
                keyboardType="numeric"
            />
            <Text style={styles.labelText}>Celsius</Text>
        </View>
    );

    renderF = () => (
        <View style={styles.formSection}>
            <TextInput
                style={styles.input}
                onChangeText={this.onChangeFahrenheit}
                value={this.state.fahrenheit}
                placeholder="Fahrenheit"
                keyboardType="numeric"
            />
            <Text style={styles.labelText}>Fahrenheit</Text>
        </View>
    )

    render() {
        const {
            order
        } = this.state;
        return (
            <View style={styles.root}>
                <View style={styles.formRoot}>
                    {order === 0 ? this.renderD() : this.renderF()}
                    <TouchableOpacity
                        style={styles.imageContainer}
                        onPress={this.onChangeOrder}
                    >
                        <Image
                            source={SwapIcon}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    {order === 0 ? this.renderF() : this.renderD()}
                </View>
            </View>
        );
    }
}