import React, {useMemo} from 'react';
import styles from '../../styles/button.style';
import {
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  View,
} from 'react-native';

const Button = props => {
  const {text, onPress, disabled, style, textStyle} = props;

  const styleMemo = useMemo(
    () => [
      styles.container,
      disabled ? styles.disabled : styles.enabled,
      style,
    ],
    [disabled],
  );

  const textStyleMemo = useMemo(() => [styles.text, textStyle], []);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styleMemo}>
        <Text style={textStyleMemo}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
