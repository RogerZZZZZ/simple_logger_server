/**
 * Utils
 */
response = (res, tpl, obj, status) => {
  res.format({
    html: () => res.render(tpl, obj),
    json: () => {
      if (status) return res.status(status).json(obj);
      res.json(obj);
    }
  });
}

respondOrRedirect = ({ req, res }, url = '/', obj = {}, flash) => {
  res.format({
    html: () => {
      if (req && flash) req.flash(flash.type, flash.text);
      res.redirect(url);
    },
    json: () => res.json(obj)
  });
}


module.exports = {
  response,
  respondOrRedirect
}