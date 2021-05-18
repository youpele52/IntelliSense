import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <Link to='/'> */}
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBvWU9cmkVHOt-gJrM1I2TvTYXM-Qm732dJ5dwRX-g9s6xgskPQPAlR2evWX0LcdYEJQ&usqp=CAU'
            alt='logo'
          />
          <div className='company'>
            Intelli<span>Sense.io</span>{' '}
          </div>
          {/* </Link> */}
        </div>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  // background: #040c1a;
  background: #125ee1;

  .dark-mode-toggle {
  }
  .company {
    font-size: 1.5rem;
    color: white;
    span {
      font-weight: bold;
    }
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    img {
      width: 45px;
      margin-left: -15px;
      border-radius: 50%;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-the-green);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        // color: var(--clr-grey-3);
        color: var(--clr-normal-text);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          color: var(--clr-the-green);
          // border-bottom: 2px solid var(--clr-the-green);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
