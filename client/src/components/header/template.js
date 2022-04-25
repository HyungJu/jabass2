import { PATHNAMES } from '../../constants/pathnames.js';

const HEADER_TEMPLATE = `
    <a href="/">
    <h1 class="header-title">JABASS</h1>
    </a>
    <nav class="d-flex justify-center flex-wrap">
      <a href=${PATHNAMES.HOME}>
        <button>팀 찾기</button>
      </a>
      <a href="">
        <button>내 팀</button>
      </a>
      <a href=${PATHNAMES.LOGIN} id="login">
        <button>로그인</button>
      </a>
      <a >
        <button>회원가입</button> 
      </a>
    </nav>
`;

export default HEADER_TEMPLATE;
