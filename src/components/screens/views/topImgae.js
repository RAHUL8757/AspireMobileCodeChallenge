import React, {useMemo} from 'react';
import styles from '../../styles/button.style';
import { Image } from 'react-native';

const TopImage = () => {
  return (
    <Image
    source={require('../../../../assets/wave1.png')}
    style={styles.imageContainerBottom}
  />
  );
};

export default TopImage;