import FloatingActionButton from 'material-ui/FloatingActionButton'
import styled from 'styled-components'
import Menu from 'material-ui/svg-icons/navigation/menu'
import React from 'react';

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
  transition: margin 0.2s;
`

export const NavToggleButton = (props) => {
  return (
    <StayVisible
      {...props}
    >
      <FloatingActionButton
      onClick={props.toggle}>
        <Menu/>
      </FloatingActionButton>
    </StayVisible>
  )
}
