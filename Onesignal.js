import React from 'react';
import { View, Button } from 'react-native';
import OneSignal from 'react-native-onesignal';
export default function OneSignalNotificationButton() {

  const oneSignalAppId = '07b117cc-8a3e-4e2b-9ada-fbad9ba5db6d'; // Replace with your OneSignal App ID
  OneSignal.setAppId(oneSignalAppId);

  const handleSendNotification = async () => {
    try {
      await OneSignal.postNotification({
        contents: { en: 'This is a test notification!' },
        included_segments: ['All'], // Send to all subscribed users
      });
      console.log('Notification sent successfully!');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Send Notification" onPress={handleSendNotification} />
  </View>
  );
}
