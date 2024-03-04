import React from 'react';
import { View, Text } from 'react-native';
import ElementCard from '../components/ElementCard'; 
import { elements } from '../UserData/data';

const ElementDetail = ({ route }) => {
    const { elementName } = route.params; 
    const element = elements.find(e => e.name === elementName); 

    return (
        <View>
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

export default ElementDetail;
