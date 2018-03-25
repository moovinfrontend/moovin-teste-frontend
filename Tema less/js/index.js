/**
 * Objeto
 */
var Index = {

    init : function() {
        $('#topForm').submit(Index.testeAlert);
    },

    /**
     * Teste submit
     */
    testeAlert : function() {
        alert('Olá! Boa sorte no teste!');
    }
};
$(Index.init);