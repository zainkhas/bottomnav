import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Icon = ({name, solid, light, size, color, style, type}) => {
  let iconType = 'far';
  if (light || type == 'light') {
    iconType = 'fal';
  } else if (solid || type == 'solid') {
    iconType = 'fas';
  }

  return (
    <FontAwesomeIcon
      icon={[iconType, name]}
      size={size}
      color={color}
      style={style}
    />
  );
};

export default Icon;
