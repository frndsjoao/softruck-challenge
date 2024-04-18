import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
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

export const LanguageContainer = styled.View`
  position: absolute;
  bottom: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  padding-top: 20px;
`

export const Flag = styled.Text`
  font-size: 32px;
`