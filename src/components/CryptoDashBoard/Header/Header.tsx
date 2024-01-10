import React from 'react'
import styled from 'styled-components'
import { FiBarChart2 } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import { CgBell } from 'react-icons/cg'
import { FiHelpCircle } from 'react-icons/fi'

import { IoIosArrowDown } from 'react-icons/io'
import { BiSolidUserRectangle } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import {
  HeaderContainer,
  HeaderOption,
  HeaderOptionsContainer,
  Separator,
  Tx24Logo,
} from './Header.styles'

const Header: React.FC<{}> = () => {
  const user = 'margolu56xd'
  return (
    <HeaderContainer>
      <div>
        <FiBarChart2 color="#42f578" size={25} />
        <Tx24Logo>TX24</Tx24Logo>
      </div>
      <HeaderOptionsContainer>
        <HeaderOption>
          <RxDashboard /> <p>Dashboard</p>
        </HeaderOption>
        <Separator />
        <HeaderOption>
          <CgBell />
          <p>Messages</p>
        </HeaderOption>
        <Separator />
        <HeaderOption>
          <FiHelpCircle />
          <p>Help</p>
        </HeaderOption>
        <Separator />
        <HeaderOption>
          <FaUser size={15} style={{ background: '#42f578' }} />
          <p>{user}</p>
          <IoIosArrowDown />
        </HeaderOption>
      </HeaderOptionsContainer>
    </HeaderContainer>
  )
}

export default Header
