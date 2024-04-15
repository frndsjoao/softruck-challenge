import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
  margin: 4px 0;
  border-radius: 8px;
  padding: 16px 18px 16px 12px;
  gap: 16px;
  border-left-width: 6px;
  border-left-color: ${({ theme }) => theme.COLORS.BLUE_500};
`

export const AddressWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`

export const AddressContent = styled.View``

export const AddressType = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const Address = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 4px;
  flex-shrink: 1;
  margin-right: 6px;
`