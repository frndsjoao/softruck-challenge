import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, InputContainer } from './styles';

interface InputProps extends TextInputProps {
  icon?: { name: keyof typeof MaterialIcons.glyphMap, size: number }
}

export default function Input({ icon, ...props }: InputProps) {
  const { COLORS } = useTheme()
  return (
    <Container>
      {icon && <MaterialIcons name={icon.name} size={icon.size} color={COLORS.BLUE_500} />}
      <InputContainer {...props} />
    </Container>
  )
}