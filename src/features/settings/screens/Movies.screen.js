import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert,FlatList,Button,StyleSheet, Text, View} from 'react-native';

export const MoviesScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const onPress = ( value) => () =>  {
        Alert.alert(`You tapped ${value} the button!`);
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
        <View style={{flex: 1, padding: 24}}>
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

});
