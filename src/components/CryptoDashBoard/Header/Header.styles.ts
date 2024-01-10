import styled, { keyframes } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-left: 20px;
  div {
    display: flex;
    align-items: center;
  }
`
export const HeaderOptionsContainer = styled.div`
  flex: 1;
  justify-content: flex-end;
`

export const HeaderOption = styled.div`
  padding: 10px 30px;
  gap: 5px;
  cursor: pointer;
`

export const Separator = styled.div`
  width: 1px;
  background-color: rgba(209, 209, 209, 0.46);
  height: 100%;
`
export const Tx24Logo = styled.p`
  font-weight: 900;
  cursor: pointer;
`
