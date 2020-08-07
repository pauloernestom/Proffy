import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';


function TeacherItem() {
    return (
        <View style={styles.container} >
            <View style={styles.profile} >
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/pauloernestom.png' }}
                />

                <View style={styles.profileInfo} >
                    <Text style={styles.name}>Paulo Ernesto Marchezi</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Commodo commodo aute magna consectetur cillum anim Lorem. Enim consequat ullamco exercitation do dolore. 
                {'\n'}{'\n'}
                Enim esse aliqua ad veniam magna magna fugiat ut tempor eu pariatur. Tempor voluptate eu amet laboris culpa eiusmod commodo proident non fugiat nulla occaecat et. Excepteur in ipsum in id eu minim elit.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 50,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;