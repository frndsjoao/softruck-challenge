import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 46px;
  width: 100%;
  background-color: #F5F6F7;
  padding: 0 16px;
  border-radius: 8px;
`

export const InputContainer = styled.TextInput`
  width: 100%;
  height: 46px;
  margin-left: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK};
`