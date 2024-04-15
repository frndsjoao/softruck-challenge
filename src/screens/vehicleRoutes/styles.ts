import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
`

export const VehicleInformation = styled.View`  
  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  flex-direction: row;
  align-items: center;
  margin: 4px 0;
  border-radius: 8px;
  padding: 6px 12px;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-right: 12px;
`

export const VehicleTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const VehicleDescription = styled.Text`
  margin-top: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const VehicleBoldDescription = styled.Text`
  margin-top: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  margin: 10px 0;
`

export const EmptyList = styled.Text`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY};
  flex-shrink: 1;
`