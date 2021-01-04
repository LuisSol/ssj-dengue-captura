import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  color: ${({ theme: { colors } }) => colors.gray};
  height: 45px;
  font-size: 14px;
  font-weight: 600;
  margin: 20px 0;

  span {
    border: 2px solid ${({ theme: { colors } }) => colors.aquaBlue};
    border-radius: 50%;
    height: 26px;
    margin-right: 10px;
    width: 26px;
  }
`;
