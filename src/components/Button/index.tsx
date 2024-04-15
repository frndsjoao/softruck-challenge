import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      <Label>{label}</Label>
    </Container>
  )
}