/// <reference types="Cypress"/>

describe('페이지가 모두 존재하는지 테스트합니다.', () => {
  before(() => {
    cy.visit('/');
  });

  it('제목 이름 JABASS가 화면에 존재한다.', () => {
    cy.contains('JABASS').should('be.visible');
  });

  it('로그인 버튼을 클릭했을 때 로그인 페이지로 이동한다.', () => {
    cy.contains('로그인').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
  });

  it('회원가입 버튼을 클릭했을 때 회원가입 페이지로 이동한다.', () => {
    cy.contains('회원가입').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/signup`);
  });

  it('팀 찾기 버튼을 클릭했을 때 팀들 리스트 페이지로 이동한다.', () => {
    cy.contains('팀 찾기').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/team`);
  });

  it('내 팀 버튼을 클릭했을 때 내팀 페이지로 이동한다.', () => {
    cy.contains('내 팀').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/myteam`);
  });
});
