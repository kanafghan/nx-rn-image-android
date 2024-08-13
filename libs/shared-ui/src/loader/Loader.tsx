import { View, Image } from 'react-native';

/* eslint-disable-next-line */
export interface LoaderProps {
  width: number;
  height: number;
}

export function Loader({ width, height }: LoaderProps) {
  return (
    <View>
      <Image
        style={{ width, height }}
        source={require('./loading.gif')}
        onError={(e) => console.log('[Loader] onError:', e.nativeEvent.error)}
      />
    </View>
  );
}

export default Loader;
