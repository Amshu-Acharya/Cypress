import { manualApprovalPage } from "../pomPages/approvalPage";
import { productApprovalPage } from "../pomPages/approvalPage";
const manual = new manualApprovalPage
const product = new productApprovalPage
import { partnerLoginFunction } from "./partnerLogin.cy";

beforeEach(() => {
    partnerLoginFunction()
    cy.visit("/approval")

    cy.intercept("GET","/middle/v1/approval-template/template/list").as("waitPage")
    cy.wait('@waitPage')

});

describe.only('Manual Disbursal Approval Dashboard ', () => {

    beforeEach(() => {
        manual.manualDisbursement().click()
    });
    context("Section devides further more", () => {
    it('Manual Disbursal Approved Page', () => {
        manual.approvedManual().click()
        manual.selectDropdown().click()
        manual.viewDetail().click()
        it('finds list items', () => {
            cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
          });
    });
    })

    it('Manual Disbursal Pending Page', () => {
        manual.selectDropdown().click()
        manual.viewDetail().click()
    });

    it.only('Manual Disbursal Reject Page', () => {
        manual.rejectManual()
        manual.selectDropdown().click()
        manual.viewDetail().click()
    });

});
describe('Product Approval Dashboard', () => {

    beforeEach(() => {
        product.productApprove().click()
    });

    it('Product Approval Page', () => {
        product.waitProduct()
    });
    it('Product Approval Page', () => {
        product.waitProduct()
    });
});