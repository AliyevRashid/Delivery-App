import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ElementCard from '../components/ElementCard'; 
import { elements } from '../UserData/data';

const ElementDetail = ({ route }) => {
    const { elementName } = route.params; 
    const element = elements.find(e => e.name === elementName); 

    return (
        <View style={styles.container}>
            {element && ( 
                <ElementCard 
                    title={element.name}
                    description={`${element.name} elements`}
                    url={element.imageUrl}
                    price={'price: '+element.price +'$'}
                />
            )}
            {!element && ( 
                <Text>Element not found</Text>
            )}
        </View>
    );
};

const styles =StyleSheet.create({
    container:{
        height:'90%',
        width:'90%'
    }

})

export default ElementDetail;
