import React from 'react';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';

const Footer = ({ navigation }) => {
    return (
        <View style={styles.footerContainer}>
            <Pressable style={styles.button} onPress={() => { navigation.navigate("Login") }}>
               <Image  style={styles.image} source= "https://w7.pngwing.com/pngs/640/527/png-transparent-basic-logout-exit-close-cancel-out-ui-office-icon-thumbnail.png"  /> 
            </Pressable>
            <Pressable style={styles.button}>
                <Image style={styles.image} source="https://w7.pngwing.com/pngs/584/513/png-transparent-shopping-cart-computer-icons-encapsulated-postscript-add-to-cart-button-angle-text-internet.png"  />
            </Pressable>
            <Pressable style={styles.button}>
                <Image style={styles.image} source="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"  />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        width:'100%',
        height:'10%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:'white'
    },
    button: {
        flex: 1,
        paddingHorizontal: '1%',
        paddingVertical: '1%',
    },
    image: {
        height: "100%",
        width: '100%',
        resizeMode:'center'
    }
})

export default Footer;