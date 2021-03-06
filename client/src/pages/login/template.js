import { PATHNAMES } from '../../constants/pathnames.js';

const LOGIN_TEMPLATE = `
<div class="login-wrapper">
  <div class="heading">
    <h2>π λ‘κ·ΈμΈ</h2>
  </div>

  <form>
    <div class="auth-input-control">
      <label for="id" class="auth-input-label">μμ΄λ</label>
      <input type="text" id="id" name="id" class="auth-input-field" placeholder="μμ΄λ">
    </div>
    <div class="auth-input-control">
      <label for="password" class="auth-input-label">λΉλ°λ²νΈ</label>
      <input type="password" id="password" name="password" class="auth-input-field" placeholder="λΉλ°λ²νΈ"/>
    </div>

    <div>
      <button>νμΈ</button>
    </div>

    <p>
      μμ§ νμμ΄ μλμ κ°μ?
      <a href="${PATHNAMES.SIGN_UP}">νμκ°μ</a>
    </p>

  </form>
</div>
`;

export default LOGIN_TEMPLATE;
