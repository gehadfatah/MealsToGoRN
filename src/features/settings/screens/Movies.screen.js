import React, {useEffect, useState} from 'react';
import {ActivityIndicator,TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback, TouchableNativeFeedback,Alert,FlatList,Button,StyleSheet, Text, View} from 'react-native';

export const MoviesScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const onPress = ( value) => () =>  {
        Alert.alert(`You tapped ${value} the button!`);
    };
    const onPressButton = () => {
       // Alert.alert('You tapped the button!');
    };

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
        <View style={{flex: .7, padding: 24}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                        <Text>
                            {item.title}, {item.releaseYear}
                        </Text>
                    )}
                />

            )}
        </View>
            <TouchableHighlight onPress={onPressButton} underlayColor="#2196F3" style= {styles.touchview}>
                <View >
                    <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={onPressButton} underlayColor="white" >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableHighlight2</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={onPressButton} >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableNativeFeedback onPress={onPressButton} >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithFeedback</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback onPress={onPressButton} >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
    <View style={styles.buttonContainer}>
        <Button onPress={onPress(" :) Press Me :)")} title="Press Me" color="#841584" />
    </View>

        </>
    );
};

const styles = StyleSheet.create({

    buttonContainer: {
        margin: 20,
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
    },
    button: {
        marginBottom: 30,
        width:  "center",
        marginHorizontal:30,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    }, touchview: {
        margin: 30,
        alignItems: 'center',
        backgroundColor: '#2196F3',

    }

});
