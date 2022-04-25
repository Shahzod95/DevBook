import styled from "styled-components";

export const NavbarSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  /* &.navbar {
    z-index: 10;
    width: 100%;
    border-bottom: 1px solid rgba(#fff, 0.1);

    & > .auto-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__logo {
      max-width: 150px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      font-size: 25px;
      font-family: $rotter;
      color: $text-primary;
      transition: all 0.3s linear;

      &:hover {
        text-shadow: 0 0 2px $text-white;
      }
    }

    &__nav {
      padding-top: 18px;
      display: flex;
      list-style: none;

      &-link {
        position: relative;
        padding: 10px 10px 28px 10px;
        color: $text-white;
        border-bottom: 2px solid transparent;
        transition: all 0.3s linear;

        &:not(:last-child) {
          margin-right: 23px;
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: $text-white;
          transition: all 0.3s linear;
        }

        &:not(.active):hover {
          color: $text-primary;

          &::after {
            background: $text-primary !important;
          }
        }

        &:hover,
        &.active {
          &::after {
            width: 100%;
          }
        }
      }
    }

    &__auth {
      max-width: 150px;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      &-link {
        font-size: 16px;
        cursor: pointer;
        color: $text-white;
        transition: all 0.3s linear;
        &:nth-child(2) {
          padding-left: 10px;
          border-left: 1px solid $text-white;
          margin-left: 10px;
        }
        &:hover {
          color: $text-primary;
        }
      }
    }
    &__user {
      max-width: 150px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    &__toggle {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .navbar {
      &__logo {
        margin-top: 7px;
      }
      height: 50px;
      // background: green;
      border: none;

      &__nav {
        position: fixed;
        left: 0;
        top: 50px;
        z-index: 10;
        padding: 30px 15px;
        flex-direction: column;
        background: rgba(#000, 0.9);
        width: 100%;
        height: 100vh;
        &-link {
          padding: 10px;
          margin: 0 0 20px 0 !important;
        }
      }

      &__auth {
        margin-left: auto;
      }
      &__user {
        margin-left: auto;
      }

      &__toggle {
        margin-left: 15px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          .navbar__toggle-icon {
            background: $text-primary;
            &::after,
            &::before {
              background: $text-primary;
              width: 100%;
            }
          }
        }

        &-icon {
          display: block;
          position: relative;
          width: 100%;
          height: 3px;
          background: #fff;
          transition: all 0.3s linear;

          &::before,
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: -13px;
            height: 3px;
            width: 80%;
            background: #fff;
            transition: all 0.3s linear;
          }

          &::after {
            top: 13px;
            width: 50%;
          }
        }
      }
    }
  } */
`;

// export const NavbarContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     height: 80px;
// `;
