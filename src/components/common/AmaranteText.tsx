/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// files
import { ThemedText, TextProps } from './Themed';

export default function AmaranteText(props: TextProps): JSX.Element {
  const { style, ...otherProps } = props;

  return (
    <ThemedText
      style={[style, { fontFamily: 'Amarante_400Regular' }]}
      {...otherProps}
    />
  );
}
