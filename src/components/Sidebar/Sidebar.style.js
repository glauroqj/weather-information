import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 14rem;
  font-size: 0.85rem;
  background-color: ${props => props.theme.color.c_light};
  color: ${props => props.theme.color.c_secondary_dark};
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  overflow: none;
  box-shadow: 0 2px 5px #cecece;
  padding: 10px 5px;

  > h4 {
    font-size: ${props => props.theme.typography.fontSize[18]};
    border-bottom: 1px solid #eee;
    padding: 15px 5px;
  }
  // 640px
  @media( max-width: ${props => props.theme.breakpoint.xs} ) {
    width: 6.5rem;
    font-size: 0.65rem;
    margin-left: 0;
  }
`

export const SidebarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const SidebarItem = styled.li`
  color: inherit;
  padding: 10px;
  font-size: ${props => props.theme.typography.fontSize[16]};
  text-align: left;
`
// export const HomeButtonContainer = styled.div`
//   position: fixed;
//   z-index: 9;
//   top: ${props => props.show ? "10%" : "-90px"};
//   transition: top 0.8s ease;
// `