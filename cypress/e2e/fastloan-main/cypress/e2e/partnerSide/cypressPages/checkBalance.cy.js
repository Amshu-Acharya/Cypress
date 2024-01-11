import {partnerLoginFunction} from "./partnerLogin.cy";
import balanceCheck from '../pomPages/checkBalance';


describe('Check Balance Page', () => {
    
    it.only('Positive Balance Check', () => {

        partnerLoginFunction()
        balanceCheck.balanceCheckPage()

    });
  

});