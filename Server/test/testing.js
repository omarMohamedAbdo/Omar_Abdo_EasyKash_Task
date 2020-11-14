const chai = require('chai')
const expect = chai.expect
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);
var request = require('request');

const controller = require('../app/controllers/transaction.controller')

describe("Validate Pagination function", () => {

	it("limit should be same to size and offset should be page*limit ", ()=> {
		expect(controller.getPagination(2,2)).to.deep.equal({ limit: 2, offset: 4 })
    })
    
    it("if size and page params are null, the default for limit is 3 and offset 0", ()=> {
		expect(controller.getPagination()).to.deep.equal({ limit: 3, offset: 0 })
	})
	
})

describe('Integration Test Get /transaction', () => {
    it('it should respond with status 200', (done) => {
      chai.request(server)
          .get('/transaction')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
});
