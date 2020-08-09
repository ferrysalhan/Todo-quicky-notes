// import React, {useState} from 'react';
// import { TextInput, StyleSheet, Button, View} from 'react-native';

// const CreateNoteComonent = () => {
//     const [newNoteText, setNewNoteText] = useState('')
//     return <View>
//      <TextInput style={styles.textInputStyles}
//     autoCorrect={false}
//     autoCapitalize="none"
//     multiline={true}
//     value={newNoteText}
//     onChangeText={(currentText) => setNewNoteText(currentText)}
//     />
//     <Button title={"Create Note"}/>
//     </View>
// }

// const styles = StyleSheet.create({
//     testInputStyles:{
//         borderWidth: 5,
//         width: 318,
//         height: 140,
//         borderRadius: 10
//     } 
// });

// export default CreateNoteComonent;
import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native'
import firebase from 'firebase';

const CreateNoteComponent = (props) => {
    console.log(props)
    const [newNoteText, setNewNoteText] = useState('')

    return <View>
        <TextInput 
        style={styles.textInputStyles}
        autoCorrect={false}
        autoCapitalize="none"
        multiline={true}
        value={newNoteText}
        onChangeText={(currentText) => {
                setNewNoteText(currentText)
        
        }
        }
        />
        <Button 
            title={"Create Note"}
            onPress={() => {
                // Store the text on firebase as well
                // /users/{id}/
                if(newNoteText !== '') {
                    const loggedInUserId = firebase.auth().currentUser.uid
                    const pathForData = `/users/${loggedInUserId}/`
    
                    firebase.database()
                        .ref(pathForData)
                        .push({
                            'date': new Date().toDateString(),
                            'text': newNoteText
                        })
                    setNewNoteText('')
                }

            }}
        />
    </View>
    
}

const styles = StyleSheet.create({
    textInputStyles: {
        borderWidth: 5,
        width: 320,
        height: 140,
        borderRadius: 10,
        padding: 17,
        fontSize: 30
    }
});

export default CreateNoteComponent;