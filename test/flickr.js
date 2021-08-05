let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../routes/flickr')


//Assertion Style
chai.should();

chai.use(chaiHttp);


describe('Flickr API', () => {
    /**
    * Test the GET route
    */

    describe("GET /flickr", () => {
        it("It should GET list flickr", (done) => {
            chai.request(server)
                .get('/flickr')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                })
            done();
        })

        it("It should NOT GET list flickr", (done) => {
            chai.request(server)
                .get("/flickrs")
                .end((err, response) => {
                    response.should.have.status(404);
                });
            done();
        });
    })

    /**
    * Test the GET BY TAGS route
    */

    describe("GET /flicker/:id", () => {
        it("It should GET list flickr by TAGS", (done) => {
            const flickrTags = 'cat';
            chai.request(server)
                .get(`/flickr/${flickrTags}`)
                .end((err, response) => {
                    response.should.have.status(200);
                    res.body.should.be.a('array')
                });
            done();
        });
    });

})
