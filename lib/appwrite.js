import { Platform } from "react-native";
import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '67533c7d00234ec9f684',
    databaseId: '675407e3000cd037797b',
    userCollectionId: '6754095d00010db6d87f',
    videoCollectionId: '6754099c003a12ecbe72',
    storageId: '67540b81000f1e089b05'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);

export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}


