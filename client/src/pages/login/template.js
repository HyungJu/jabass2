import { PATHNAMES } from '../../constants/pathnames.js';

const LOGIN_TEMPLATE = `
<div class="login-wrapper">
  <div class="heading">
    <h2>👋 로그인</h2>
  </div>

  <form>
    <div class="auth-input-control">
      <label for="id" class="auth-input-label">아이디</label>
      <input type="text" id="id" name="id" class="auth-input-field" placeholder="아이디">
    </div>
    <div class="auth-input-control">
      <label for="password" class="auth-input-label">비밀번호</label>
      <input type="password" id="password" name="password" class="auth-input-field" placeholder="비밀번호"/>
    </div>

    <div>
      <button>확인</button>
    </div>

    <p>
      아직 회원이 아니신가요?
      <a href="${PATHNAMES.SIGN_UP}">회원가입</a>
    </p>

  </form>
</div>
`;

export default LOGIN_TEMPLATE;
