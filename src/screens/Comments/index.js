import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';


export default function Comments() {

    return (
        <>
            <ScrollView contentContainerStyle={{ backgroundColor: 'white', flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitke}>Comments (3)</Text>
                </View>

                <View style={styles.commentContainer}>
                    <View style={styles.innder}>
                        <Image
                            style={styles.image}
                        />
                        <View style={styles.text}>
                            <Text style={styles.name}>Brigita</Text>
                            <Text style={styles.dexs}>Ut adipisicing laboris fugiat commodo voluptate ullamco.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.commentContainer}>
                    <View style={styles.innder}>
                        <Image
                            style={styles.image}
                        />
                        <View style={styles.text}>
                            <Text style={styles.name}>Brigita</Text>
                            <Text style={styles.dexs}>Ut adipisicing laboris fugiat commodo voluptate ullamco.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.sendContianer}>
                <View style={styles.row}>

                    <TextInput
                        style={styles.textin}
                        placeholder="Write your comment here..."
                    />
                    <Feather name="send" style={styles.send}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 20
    },
    headerTitke: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        backgroundColor: 'grey',
        borderRadius: 100,
        width: 50,
        height: 50
    },
    commentContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        width: '90%',
        alignSelf: 'center'
    },
    innder: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    text: {
        marginLeft: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    dexs: {
        width: '80%',
        marginTop: 5
    },
    sendContianer: {
        paddingBottom: 30,
        backgroundColor: '#f3f3f3',
        paddingTop: 10
    },
    textin: {
        borderColor: 'grey',
        borderWidth: 0.3,
        height: 50,
        backgroundColor: 'white',
        width: '74%',
        padding: 10,
        borderRadius: 2
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    send: {
        marginLeft: 10,
        fontSize: 25,
    }
})