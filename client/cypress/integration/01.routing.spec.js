/// <reference types="Cypress"/>

describe('페이지가 모두 존재하는지 테스트합니다.', () => {
  before(() => {
    cy.visit('/');
  });

  it('제목 이름 JABASS가 존재하나요?', () => {
    cy.contains('JABASS').should('be.visible');
  });
});
