import styled from "styled-components/native";

interface DetailsContainerProps {
  color: string;
}

export const DetailsContainer = styled.View<DetailsContainerProps>`
  background-color: ${({ color }) => color};
  width: 120px;
  height: 80px;
  border-radius: 8px;
  padding: 12px 10px;
  margin-right: 10px;
  justify-content: space-between;
`

export const DetailsLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const DetailsValueWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 4px;
`

export const DetailsValue = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`