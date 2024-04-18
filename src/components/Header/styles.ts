import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.OFF_WHITE};
  height: 70px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLUE_50};
`

export const HeaderButtons = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const IconWrapper = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 32px;
  padding: 4px;
`

export const ReturnIconWrapper = styled.TouchableOpacity`
  background-color: transparent;
  margin-right: 8px;
`

export const LogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`