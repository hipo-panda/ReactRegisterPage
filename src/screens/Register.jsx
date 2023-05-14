import { react } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  RegisterForm,
  Regititle,
  FormGroup,
  TextLabel,
  SubmitBtn,
} from "../components/styles/Container";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameValid, setNicknameValid] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswrdValid] = useState("");
  const [passwordDoublechek, setPasswordDoubleChek] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const [errorNickname, setErrorNickname] = useState("");

  // 이메일 체크 함수
  const handle_email = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 체크 정규식

    if (emailRegex.test(e.target.value)) {
      setEmailValid(true);
      setErrorMail("");
      console.log("true");
    } else {
      setEmailValid(false);
      setErrorMail("올바른 이메일을 입력해주세요.");
      console.log("false");
    }
  };

  // 닉네임 체크 함수
  const handle_nickname = (e) => {
    setNickname(e.target.value);
    const nicknameRegex = /^[a-zA-Z가-힣]{3,15}$/;

    if (nicknameRegex.test(e.target.value)) {
      setNicknameValid(true);
      setErrorNickname("");
    } else {
      setNicknameValid(false);
      setErrorNickname("닉네임은 3~15자로 입력해주세요.");
    }
  };
  // 비밀번호 체크 함수
  const handle_password = (e) => {
    setPassword(e.target.value);
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/; // 비밀번호 체크 정규식 (영문 숫자 포함 8자리 이상)
    if (passwordRegex.test(e.target.value)) {
      setPasswrdValid(true);
      setErrorPassword("");

      // console.log("true");
    } else {
      setPasswrdValid(false);
      setErrorPassword("비밀번호는 영문 숫자 포함 8자리 이상이어야 합니다.");
      // console.log("false");
    }
  };

  const password_doublecheck = (e) => {
    setPasswordConfirm(e.target.value);
  };

  // 비밀번호 확인 함수
  useEffect(() => {
    if (password === passwordConfirm) {
      setPasswordDoubleChek(true);
      console.log("true");
      setErrorPasswordConfirm("");
    } else {
      setPasswordDoubleChek(false);
      setErrorPasswordConfirm("비밀번호가 일치하지 않습니다.");
      console.log("false");
    }
  }, [password, passwordConfirm]);

  return (
    <div>
      <Container className="page  ">
        <RegisterForm>
          <Regititle>회원가입</Regititle>

          <emailForm>
            <TextLabel htmlFor="email">이메일 주소</TextLabel>
            <FormGroup>
              <input
                className="input"
                type="text"
                required
                value={email}
                onChange={handle_email}
                placeholder="이메일을 입력하세요."
              />
              {errorMail && <p style={{ color: "red" }}>{errorMail}</p>}
            </FormGroup>
          </emailForm>

          <password_form>
            <TextLabel htmlFor="password">비밀번호</TextLabel>
            <FormGroup>
              <input
                className="input"
                required
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={handle_password}
              />
              {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
            </FormGroup>
          </password_form>

          <password_confirm_form>
            <TextLabel htmlFor="password_confirm">비밀번호 확인</TextLabel>
            <FormGroup>
              <input
                className="input"
                required
                type="password"
                value={passwordConfirm}
                onChange={password_doublecheck}
              />
              {errorPasswordConfirm && (
                <p style={{ color: "red" }}>{errorPasswordConfirm}</p>
              )}
            </FormGroup>
          </password_confirm_form>

          <nickname_form>
            <TextLabel htmlFor="password">닉네임</TextLabel>
            <FormGroup>
              <input
                className="input"
                type="text"
                required
                value={nickname}
                onChange={handle_nickname}
                placeholder="닉네임을 입력해주세요."
              />
              {errorNickname && <p style={{ color: "red" }}>{errorNickname}</p>}
            </FormGroup>
          </nickname_form>

          <SubmitBtn type="submit">가입완료</SubmitBtn>
        </RegisterForm>
      </Container>
    </div>
  );
}
