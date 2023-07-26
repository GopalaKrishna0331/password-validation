import {useState} from 'react'

import {
  Container,
  PasswordContainer,
  Heading,
  Paragraph,
  InputElement,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [name, setName] = useState('')
  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputElement
          type="password"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        {name.length <= 8 && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordContainer>
    </Container>
  )
}

export default PasswordValidator
