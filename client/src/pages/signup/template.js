const SIGNUP_TEMPLATE = `
<div class="signup-wrapper">

  <div class="heading">
    <h2 class="text">π νμκ°μ</h2>
  </div>

  <form>
    <div class="auth-input-control">
      <label for="name" class="auth-input-label">μ΄λ¦</label>
      <input type="text" id="name" name="name" class="auth-input-field" placeholder="νκΈΈλ">
    </div>
    <div class="auth-input-control">
      <label for="id" class="auth-input-label">μμ΄λ</label>
      <input type="text" id="id" name="id" class="auth-input-field" placeholder="μμ΄λ">
    </div>
    <div class="auth-input-control">
      <label for="password" class="auth-input-label">λΉλ°λ²νΈ</label>
      <input type="password" name="password" class="auth-input-field" placeholder="λΉλ°λ²νΈ"/>
    </div>
    <button>μλ£</button>
  </form>

</div>
`;

export default SIGNUP_TEMPLATE;
