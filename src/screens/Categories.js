import React from 'react';
import { StyleSheet, TextInput, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
import { categories } from '../UserData/data';

const Categories = ({ navigation }) => {
    const handlePress = (categoryName) => {
        navigation.navigate('ElementsList', { categoryName: categoryName });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <TextInput style={styles.textInput} placeholder='Search' />
                {categories.map((category, index) => (
                    <TouchableWithoutFeedback style={{width:'auto',height:'80%'}} key={index} onPress={() => handlePress(category.name)}>
                        <View style={{ height: 'auto', width: 'auto' }}>
                            <CategoryCard
                                title={category.name}
                                description={`${category.name} elements`}
                                url={category.imageUrl}
                                navigation={navigation}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        marginHorizontal: '5%',
        marginVertical: '1%',
        shadowRadius: 20,
        shadowColor: 'grey',
        borderRadius: 15,
    },
});

export default Categories;
