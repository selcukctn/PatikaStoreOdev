import React from "react";
import { View, Image, Text } from 'react-native';


import styles from './store_cards.style';

const StoreCardS = ({product})=>{
    //console.log(product);

    const renderStock = 
     <Text>Stokta Yok</Text>
    return(
        <View style={styles.container}> 
            <View style={styles.body_container}>
                <Image
                    style={styles.image}
                    source = {{uri : product.imgUrl}}
                />
                <View style={styles.descreption_container}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.pricel}</Text>
                    {product.inStock ? <Text></Text> : <Text style={styles.stock_title}>Stokta Yok</Text>}
                </View>

            </View>
        </View>
    )
}

export default StoreCardS;