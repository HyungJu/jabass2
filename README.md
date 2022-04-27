# Jabass(잡았으)
팀 단위로 일정을 확인하고 새로운 일정을 계획할 수 있는 서비스

## 왜 잡았으가 필요한가요?

팀 단위 작업에서 겹치지 않는 일정을 찾는 일은 어렵고 시간이 오래 걸립니다.  
각 팀원들이 일정을 올리더라도 이를 취합하고 남는 시간을 선택해야 하는 문제가 있습니다.  
이러한 문제를 해결하기 위해 일정 계획 서비스 잡았으를 제작하였습니다.  

## 어떤 기능이 있나요?

회원가입 후 로그인하여 팀을 생성하거나 가입할 수 있습니다.  
자신의 일정을 추가할 수 있으며 팀원들의 일정을 한 눈에 확인하고  
새로운 일정을 잡을 수 있도록 추천 일정을 표시합니다.  

사용자 - 로그인, 회원가입  
팀 - 가입, 생성, 탈퇴  
일정 - 추가, 표시, 수정, 삭제, 추천 일정 표시  

## 실행 방법

1. Node.js와 MySQL을 설치합니다.

2. 아래와 같이 데이터베이스를 생성합니다.
```mysql
CREATE database jabass;
CREATE database session;
```

3. `server` 파일 내에 `.env`파일을 생성합니다.
```text
MYSQL_USER="swm10"
MYSQL_PASSWORD="swm10"
SESSION_SECRET="swm10-jabass"
```

참고) MySQL 사용자 생성은 아래와 같이 수행할 수 있습니다.
```mysql
CREATE USER 'swm10' IDENTIFIED BY 'swm10';
GRANT ALL PRIVILEGES ON *.* TO 'swm10';
```

4. `npm install`

5. `npm start`로 서버를 켭니다.

6. http://localhost:3000/init 에 접속하면 테이블을 자동으로 생성합니다.

7. `client` 파일으로 이동합니다.

8. `npm install`

9. 'npm start'
