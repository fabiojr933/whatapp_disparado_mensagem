exports.mensagem_comum = async (req, res) => {
    res.render('whatsapp/mensagem_comum');
}
exports.mensagem_via_importacao = async (req, res) => {
    res.render('whatsapp/mensagem_via_importacao');
}
exports.mensagem_via_imagem = async (req, res) => {
    res.render('whatsapp/mensagem_via_imagem');
}
exports.mensagem_via_contatos = async (req, res) => {
    res.render('whatsapp/mensagem_via_contatos');
}
exports.sessao = async (req, res) => {
    res.render('whatsapp/sessao');
}