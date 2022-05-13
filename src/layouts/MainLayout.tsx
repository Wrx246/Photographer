import { Container } from '@mui/material'
import { FC } from 'react'
import st from './MainLayout.module.scss'

interface MainLayoutProps {
  children?: any
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Container className={st.mainLayout}>
        {children}
      </Container>
    </>
  )
}

export default MainLayout