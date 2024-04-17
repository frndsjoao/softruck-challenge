import styled from "styled-components/native";

interface DetailsContainerProps {
  color: string;
}

export const ReturnButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  z-index: 999;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

export const MapView = styled.View`
  background-color: antiquewhite;
  width: 100%;
  height: 85%;
`

export const BottomSheetContainer = styled.View`
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const AddressWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  margin-top: 20px;
`

export const Address = styled.Text`
  flex-shrink: 1;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: -2px;
`

export const Hour = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: -2px;
`

export const Span = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ITALIC};
  color: ${({ theme }) => theme.COLORS.GRAY};
  margin-top: 15px;
`

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  margin: 20px 0;
`