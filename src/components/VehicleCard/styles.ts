import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
  flex-direction: row;
  align-items: center;
  margin: 4px 0;
  border-radius: 8px;
  padding: 6px 12px;
`

export const Image = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 75px;
  margin-right: 12px;
`

export const Plate = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Model = styled.Text`
  margin-top: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`