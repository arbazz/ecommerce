import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Post({ isImage, detail, mediaType, url, profile, type, navigation }) {

    return (
        <View style={styles.cotniaenr}>
            <View style={styles.header}>
                <Image source={{ uri: profile  }} style={styles.image} />
                <View>
                    <Text style={styles.postacc}>post</Text>
                    {/* <Text style={styles.m}>49 m</Text> */}
                </View>
            </View>
            <View>
                <Text style={styles.des}>
                    {detail}
                </Text>

               {!!type === "video" ?
                <Video source={{ uri: url }}   // Can be a URL or a local file.
                    style={styles.image1}
                    resizeMode='cover'
                    borderRadius={10}
                />:
                <Image style={styles.image1}
                borderRadius={10}
                source={{ uri: url }} />
                }
                <View style={styles.bottom}>
                    <AntDesign name="like2" style={styles.icon}/>
                    <FontAwesome name="comment-o" style={styles.icon} onPress={()=>navigation.navigate("Comments")}/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cotniaenr: {
        backgroundColor: 'white',
        padding: 10,
        elevation: 10
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
        marginLeft: 10,
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
        height: 250,
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
    }
})