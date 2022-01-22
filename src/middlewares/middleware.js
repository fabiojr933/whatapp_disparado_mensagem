

exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros');
    res.locals.sucesso = req.flash('sucesso');
    res.locals.user = req.session.user;
    next();
  };
  
  exports.outroMiddleware = (req, res, next) => {
    next();
  };
  
  exports.checkCsrfError = (err, req, res, next) => {    
    next();
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };
  
 
  exports.autenticacao = (req, res, next) => {
    try {
      if(req.session.user){
          next();
      }else{
        req.flash('erros', 'Usuario não autenticado');
        req.session.save(() => res.redirect('/login/index')); 
        return;
      }
     }catch (error) {
      req.flash('erros', 'Usuario não autenticado');
      req.session.save(() => res.redirect('/login/index'));    
     }
  }
