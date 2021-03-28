import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addLike } from '../../config/firebase/Database/SaveData';

export default function Post({
    isImage,
    detail,
    mediaType,
    url,
    profile,
    type,
    navigation,
    likes,
    docId,
    users
}) {

    const [isLiked, setIsLiked] = useState(false);
    const [amLiked, setAmLiked] = useState(0);

    useEffect(() => {
        initiateLike();
    }, []);

    const initiateLike = async () => {
        const uid = await AsyncStorage.getItem("uid");
        // console.log(users);
        if(users.length){
            users.forEach(element => {
                if(uid === element){
                    setIsLiked(true);
                    setAmLiked(likes)
                }
            });
        }
    };

    const handleLike = async() => {
        if (isLiked) {
            setIsLiked(false);
            setAmLiked(amLiked - 1)
        } else {
            const uid = await AsyncStorage.getItem("uid");
            if (docId) {
                setIsLiked(true);
                setAmLiked(likes + 1);
                addLike(uid, docId)
            }
        }
    }

    return (
        <View style={styles.cotniaenr}>
            <View style={styles.header}>
                <Image source={require('../../../assets/images/mainLogo.png')} style={styles.image} />
                <View>
                    <Text style={styles.postacc}>    {detail}</Text>
                    {/* <Text style={styles.m}>49 m</Text> */}
                </View>
            </View>
            <View>
                {!!type === "video" ?
                    <Video source={{ uri: url }}   // Can be a URL or a local file.
                        style={styles.image1}
                        resizeMode='cover'
                        borderRadius={10}
                    /> :
                    <Image style={styles.image1}
                        borderRadius={10}
                        source={{ uri: url }} />
                }
                <View style={styles.bottom}>
                    <View style={styles.row}>
                        <AntDesign name="like2"
                            style={[styles.icon, isLiked && { color: 'blue' }]}
                            onPress={() => handleLike(docId)} />
                        <Text style={styles.like}>{amLiked ? amLiked : likes}</Text>
                    </View>
                    <FontAwesome name="comment-o" style={styles.icon} onPress={() => navigation.navigate("Comments", {docId})} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cotniaenr: {
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        width: '95%',
        alignSelf: 'center',
        marginTop: 20
    },
    image: {
        borderRadius: 4,
        width: 40,
        height: 40,
        borderRadius: 199,
        backgroundColor: 'grey'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postacc: {
        marginLeft: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    m: {
        fontSize: 8,
        alignSelf: 'flex-end',
        color: 'grey'
    },
    des: {
        fontWeight: '700'
    },
    image1: {
        width: '100%',
        height: 300,
        marginTop: 10,
        backgroundColor: 'grey'
    },
    bottom: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center'
    },
    icon: {
        fontSize: 30,
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    like: {
        marginLeft: 10,
        fontSize: 22,
        marginTop: 2
    }
})