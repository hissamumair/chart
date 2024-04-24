// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// const InformationHub = () => {
//   const [message, setMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);

//   const handleSendMessage = () => {
//     if (message.trim() !== '') {
//       setChatMessages([
//         ...chatMessages,
//         {id: chatMessages.length + 1, text: message, user: 'user'},
//       ]);
//       setMessage('');
//     }
//   };

//   const renderItem = ({item}) => (
//     <View
//       style={[
//         styles.item,
//         item.user === 'user' ? styles.userMessage : styles.botMessage,
//       ]}>
//       <Text style={styles.message}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={chatMessages}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         inverted
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type your message..."
//           value={message}
//           onChangeText={text => setMessage(text)}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   item: {
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//     maxWidth: '80%',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: 'grey',
//   },
//   botMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#E6E6E6',
//   },
//   message: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: 'black',
//     paddingTop: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 2,
//     borderColor: 'black',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   sendButton: {
//     marginLeft: 10,
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//   },
//   sendButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
// });

// export default InformationHub;
