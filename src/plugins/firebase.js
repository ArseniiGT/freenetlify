// import firebase from 'firebase/app';
// import 'firebase/auth';

// // Ваш конфиг Firebase
// const firebaseConfig = {
//     "type": "service_account",
//     "project_id": "corpnet-93cc9",
//     "private_key_id": "c756a4bf78aba090f3a8226af03ea596fa82a74f",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2qjDpYj7gOBDj\nD5EJux/wZs8W3RCmmK5vTyZKNjzLtQ6y0tNqYIZ3olOgWmTb11NBtEISwSgJ/YNO\ndqnp7GGMLUQkfH/npOprmg1HIlWB1C2HmlkLdK/cUffQz2tLsNP7Dh9RD+0NfoUM\n5m+yBZAODhlWIx3+jOsU+XeGOctFaMOKFTRaILIbse1DH2/YCoIXtdlk19BHkCzw\nDmgzsv4Wm94umfFvXRoQ8LfF+zudzCyOYAzIyJY9AVg3ZNpWrwCd/UJnmFBkwuv2\ni0c8OuaGOYu8t2koDDBbqod7IWk3Apd8WRmvWgkDBDVhuwXv5lauglMIklzzPCX5\nyl8G8g1zAgMBAAECggEACgXzEs4OzYaWD/eUia2odixrXwGjaRjbXYVA1cqocbR4\n3tbTE1/CO9dUR79zZbLTlo6PH5tUw0joxx9GJJgReZEppOeQrIPapIE6taAMhB1s\noCfCjMPgOzKOQCQu6uOERkmYmKigj+B/lDJ4Mj28PAvfAmCBRAIJ4PKYHJftmlx/\nqaXMlXnr3bUhF1aZmUNn+knBElH8GDiSUSfj2gLMoQm//+pqE2TSvTI1JYBB43PA\ne9/6AdPOm/LBVMWAK9eOWsQqXJ3uaFeMiRitRAXa1g8SqnPwPIVjNe3ozlcQsAAt\ni2VSrbJ4vIsY2tOhj4z898VKgfBxVY5KBC2fbfEvVQKBgQDrHHQpFm88NGZF41ni\ngyAQ6KgRSP4nCcJ+c+XT0a7GuK9Gxnv1Ph8v61NLF0nKA/gwSsrzioOS/rBviLfG\nax/hpR4IiE5K/xrXSahuTQeqrwGl8FNFAUSs8z4jkI+gLYTtMuQ7UVND5OxAHZmr\nX09VTRWCj1zb6FmyXpW8nyBftQKBgQDG5NumYoRKtSUJkSBO2eeKueAjGqXd57Px\n3vaL6y7S07Md/1weu03f8S1+jB1xMcdFb2OPl/Rf0NEGhQUdym3Z0Jo8oN957CfM\nfkqBX0NzX2S9xAsDesVllO4u0RsIHaiBLuCtCIg6ZZzY+YoN0wD3PeJlM774YzHt\nODXWP6xhhwKBgQDDr1wTcqPEtUxGcRM4D7FZwXtZX6qBrYLfIvGwWn6g0ci5HKzB\nkyH8DV63SjvVU3Z4I1hGWgxnBWquelmTYUgY1AhqS6D2lNuvQpRYse5mpuC1T5DP\nB140oQQgL8sLI7fWgRwrLuYhxWDJgJmNZHewZMc5cr90HTDC4Cy64KreXQKBgEJL\nxJ9oVTpluQvAUSmXXqOSI5Dv7/vQoN1teXbYFMp3gEvuc3FW87VCuexlnea+NfMC\nFwilGPLbMuFec38jm4wwCUlOQk9slTOHoSQQcfZCBN1wPE+Tm7qpct8uGjmRUTqG\nOqPSpT354tc8DnVfMQI4oX8kSXKX9ethgiiBHt9/AoGAc/SOHCFTihIQFheK0Dvr\n3The2NwV7c5VYKduuYp6ASrOGE7hKKNW2JLPvfIhGgAvQ2cUKbJ8MRv/FtRA6Ksi\nymtTNMnSV5nCC3eBriUrJr6LTD4YbZREc0PPnmoy5+8iYtwLdy7OTTx0UoIwMr2F\nljKRO8gVLIqbtGUSx1vDf4Y=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-jehh8@corpnet-93cc9.iam.gserviceaccount.com",
//     "client_id": "108988034650960550986",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jehh8%40corpnet-93cc9.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   };

// // Инициализация Firebase
// firebase.initializeApp(firebaseConfig);

// // Экспорт модуля аутентификации Firebase
// export const auth = firebase.auth();