import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
`

export const Category = styled.View`
  margin: 20px 0;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.BLUE_50};
  padding-top: 20px;
`

export const CategoryTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 10px;
`

export const EmptyList = styled.Text`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY};
`