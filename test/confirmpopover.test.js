define(['confirmpopover'],
function(ConfirmPopover) {

  describe("confirmpopover", function() {
    
    it('should export constructor', function() {
      expect(ConfirmPopover).to.exist;
      expect(ConfirmPopover).to.be.a('function');
    });
    
  });
  
  return { name: "test.confirmpopover" }
});
