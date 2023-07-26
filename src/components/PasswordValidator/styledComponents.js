import styled from 'styled-components'

export const Container = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PasswordContainer = styled.div`
  background-color: #383a4e;
  border-radius: 12px;
  padding: 26px;
  text-align: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 600;
  font-size: 42px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 12px;
  margin-bottom: 30px;
`
export const InputElement = styled.input`
  height: 45px;
  width: 100%;
  font-family: 'Roboto';
  padding: 8px;
  outline: none;
`
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
`
