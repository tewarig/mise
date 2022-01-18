/// <reference types="cypress" />

describe('test1', ()=>{
  
    //every single function inside it is a test :)
    it('test one', ()=>{
      cy.visit('https://mise.gauravtewari.xyz');

      // to check it contians a specific test 
      cy.contains("Machure BAG");
      cy.contains("Hoodie Sale");

      // more of a css selector div
      cy.get('__next').should("exist");
      cy.get('div#root').should('not.exist');
      cy.get('custom-attribute');

    });


}) ;