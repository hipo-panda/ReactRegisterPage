import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
`;
export const Regititle = styled.div`
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
  input {
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom: 2px solid black;
    height: 30px;
    font-size: 20px;
    width: 100%;
    outline: none;
    margin-bottom: 10px;
  }
`;

export const RegisterForm = styled.div`
  min-width: 450px;
  min-height: 650px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
`;

export const TextLabel = styled.label`
  margin-bottom: 15px;
  margin-top: 15px;
  font-weight: bold;
  color: #4b4b4b;
  font-size: 20px;
`;
export const SubmitBtn = styled.button`
  width: 400px;
  display: block;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px;
  /* outline: none; */
  border: none;
  color: #4b4b4b;
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 19px 38px,
    rgba(0, 0, 0, 0.15) 0px 15px 22px;

  &:active {
    transform: translateY(2px);
  }
`;
