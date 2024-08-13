import { Building, Loader } from '@nx-rn-image-android/shared-ui';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
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
            <Text style={{ color: '#afafaf', fontSize: 22 }}>Nx RN Image</Text>

            <Loader width={64} height={64} />

            <Building width={102} height={68} />
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
