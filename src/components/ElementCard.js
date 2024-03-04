import { StyleSheet, Text,  View,Image } from 'react-native';




const ElementCard=({title,description,url,price,navigation})=>{


    return (
        <View  style={styles.cardContainer}>
           
                 <View style={styles.imageContainer}>
                     <Image source = {url}  style={styles.image} />
                 </View>
                 <Text style={styles.titleStyle}>
                     {title}
                 </Text>
                 <Text style={styles.descriptionStyle}>
                     {description}
                 </Text>
                 <Text style={styles.descriptionStyle}>
                     {price}
                 </Text>
        </View>
    );
}

export default ElementCard;


const styles = StyleSheet.create({

    cardContainer:{

        width:'35%',
        height:'85%',
        // paddingVertical:'1%',
        paddingHorizontal:'1%',
        marginVertical:'2%',
        marginLeft:'30%'
    },
    imageContainer:{
        width:'100%',
        height:'60%',
        borderRadius:15,
        // paddingVertical:'1%',
        // paddingHorizontal:'1%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
      },
    titleStyle:{
        fontWeight:'700',
        marginVertical:'0.5%'
    },
    descriptionStyle:{
        marginVertical:'0.5%'
    }
})