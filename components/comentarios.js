import { Text, View, StyleSheet, RefreshControl, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import React from 'react';
import Moment from 'moment';
import 'moment/src/locale/pt-br'


export default function Comentarios(props) {

    let trLocale = require('moment/locale/pt-br');
    Moment.locale('pt-br', trLocale)

    return (
        <FlatList
            data={props}
            renderItem={({ item }) =>
                <View key={item._id} style={styles.event} >
                    <View style={styles.card}>
                        <Text style={styles.nameText}>Pessoa: </Text>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nameText}>Conteudo: </Text>
                        <Text style={styles.text}>{item.conteudo}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nameText}>Postado em: </Text>
                        <Text style={styles.text}>{Moment(item.momento).calendar()}</Text>
                    </View>
                </View>
            }
        />
    )
}