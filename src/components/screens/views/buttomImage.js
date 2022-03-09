import React, {useMemo} from 'react';
import styles from '../../styles/button.style';
import { Image } from 'react-native';

const BottomImage = () => {
  return (
    <Image
    source={require('../../../../assets/wave1.png')}
    style={styles.imageContainerTop}
  />
  );
};

export default BottomImage;