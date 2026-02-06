
//something i add
describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('shows the login form', () => {
      cy.contains('Login').should('be.visible')
      cy.get('#username').should('be.visible')
      cy.get('#Password').should('be.visible')
    })

    it('Placeholder shown', () => {
      cy.get('#username').should('have.attr', 'placeholder', 'Username').ans('have.value','')   
      cy.get('#Password').should('have.attr', 'placeholder', 'Password')
    })
  
    it('logs in with valid credentials', () => {
      cy.get('#username').type('practice')
      cy.get('#Password').type('SuperSecretPassword!')
      cy.contains('button','Login').click()
  
      cy.contains('You logged into a secure area!').should('contain', 'secure area')
    })
  
    it('shows error for invalid credentials', () => {
      cy.get('#username').type('practice')
      cy.get('#Password').type('wrongPassword')
      cy.contains('button','Login').click()
  
      cy.contains('Your Password is invalid!').should('be.visible')
    })
  })

  describe('Todo Page', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Todo shown',()=>{
        cy.contains('Todo App').should('be.visible');
    })

    it('Input shown',()=>{
        cy.get('.new-todo').type('Drink water').should('have.value','Drink water')
    })

    it('Input free after enter',()=>{
        cy.get('.new-todo').type('Drink water{enter}').should('have.value','')
    })

    it('Add todo',()=>{
        cy.get('.new-todo').type('Learn Cypress{enter}')
        cy.contains('Learn Cypress').should('be.visible')
    })

    it('add multiple todos',()=>{
        cy.get('.new-todo').type('Learn Cypress{enter}')
        cy.get('.new-todo').type('Write Tests{enter}')
        // cy.contains('Learn Cypress').should('be.visible')
        // cy.contains('Write Tests').should('be.visible')
        cy.get('ul>li').should('have.length',2)
    })

    it('toggles only the selected todo', () => {
        cy.get('.new-todo').type('Drink water{enter}')
        cy.get('.new-todo').type('Walk{enter}')
      
        cy.contains('Drink water')
          .parent()
          .find('input[type="checkbox"]')
          .check()
      
        cy.contains('Walk')
          .parent()
          .find('input[type="checkbox"]')
          .should('not.be.checked')
      })

      it('toggles only the selected todo', () => {
        cy.get('.new-todo').type('Drink water{enter}')
        cy.get('.new-todo').type('Walk{enter}')
      
        cy.contains('Drink water')
          .parent()
          .find('input[type="checkbox"]')
          .check()
      
        cy.contains('Drink water')
          .parent()
          .find('input[type="checkbox"]')
          .should('be.checked')
      })

      it('toggles only the selected todo', () => {
        cy.get('.new-todo').type('Drink water{enter}')
        cy.get('.new-todo').type('Walk{enter}')
      
        cy.contains('Drink water')
          .parent()
          .find('input[type="checkbox"]')
          .check()
      
        cy.contains('Drink water')
          .parent()
          .find('input[type="checkbox"]')
          .uncheck()
      })
      
})
  