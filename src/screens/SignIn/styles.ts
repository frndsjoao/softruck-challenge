import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LogoWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`

export const Span = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  margin-top: 12px;
`
