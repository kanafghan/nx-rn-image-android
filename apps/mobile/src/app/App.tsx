import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
} from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Image
              style={{ width: 42, height: 42 }}
              source={require('./loading.gif')}
            />

            <Image
              style={{ width: 42, height: 42 }}
              source={require('./building.jpeg')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
});

export default App;
