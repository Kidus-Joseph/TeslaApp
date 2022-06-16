import { View, FlatList, Dimensions, StyleSheet } from 'react-native'

import cars from './cars';

import CarItem from '../CarItems';

export default function CarsList() {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%', 
    },
});