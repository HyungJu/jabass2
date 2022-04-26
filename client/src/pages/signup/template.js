const SIGNUP_TEMPLATE = `
<div class="signup-wrapper">

  <div class="heading">
    <h2 class="text">📝 회원가입</h2>
  </div>

  <form>
    <div class="auth-input-control">
      <label for="name" class="auth-input-label">이름</label>
      <input type="text" id="name" name="name" class="auth-input-field" placeholder="홍길동">
    </div>
    <div class="auth-input-control">
      <label for="id" class="auth-input-label">아이디</label>
      <input type="text" id="id" name="id" class="auth-input-field" placeholder="아이디">
    </div>
    <div class="auth-input-control">
      <label for="password" class="auth-input-label">비밀번호</label>
      <input type="password" name="password" class="auth-input-field" placeholder="비밀번호"/>
    </div>
    <button>완료</button>
  </form>

</div>
`;

export default SIGNUP_TEMPLATE;
