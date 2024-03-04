import React from 'react';
import { StyleSheet, TextInput, View, ScrollView, Pressable } from 'react-native';
import Footer from '../components/Footer';
import ElementCard from '../components/ElementCard';
import { elements } from '../UserData/data';

const ElementsList = ({ route, navigation }) => {
    const { categoryName } = route.params;
    return (
        <View style={styles.container}>
            <ScrollView>
                <TextInput style={styles.textInput} placeholder='Search' />
                {elements.filter(e => e.category === categoryName).map((element, index) => (
                    <Pressable key={index} style={{width:'auto',height:'80%'}} onPress={() => navigation.navigate('ElementDetail', { elementName: element.name })}>
                        <ElementCard
                            title={element.name}
                            description={`${element.name} elements`}
                            url={element.imageUrl}
                            navigation={navigation}
                        />
                    </Pressable>
                ))}
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    categorieContainer: {
        height: '90%',
        width: '100%',
    },
    textInput: {
        marginHorizontal: '5%',
        marginVertical: '1%',
        shadowRadius: 20,
        shadowColor: 'grey',
        borderRadius: 15
    }
});

export default ElementsList;
