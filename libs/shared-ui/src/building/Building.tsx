import { View, Image } from 'react-native';

export interface BuildingProps {
  width: number;
  height: number;
}

export function Building({ width, height }: BuildingProps) {
  return (
    <View>
      <Image
        style={{ width, height }}
        source={require('./building.jpeg')}
        onError={(e) => console.log('[Building] onError:', e.nativeEvent.error)}
      />
    </View>
  );
}

export default Building;
