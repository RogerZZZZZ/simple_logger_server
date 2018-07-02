/**
 * Utils
 */
const grabAttribute = (chain, target) => {
  return chain.split('.').reduce((d, i) => {
      return typeof d == 'undefined' ? d : d[i]
  }, target)
}

const response = (res, tpl, obj, status) => {
  res.format({
    html: () => res.render(tpl, obj),
    json: () => {
      if (status) return res.status(status).json(obj);
      res.json(obj);
    }
  });
}

const respondOrRedirect = ({ req, res }, url = '/', obj = {}, flash) => {
  res.format({
    html: () => {
      if (req && flash) req.flash(flash.type, flash.text);
      res.redirect(url);
    },
    json: () => res.json(obj)
  });
}

const only = (obj, keys) => {
  obj = obj || {};
  if ('string' === typeof keys) keys = keys.split(/ +/);
  return keys.reduce((ret, key) => {
      if (null === obj[key]) return ret
      if (key.indexOf('.') !== -1) {
          let t = key.slice(key.lastIndexOf('.') + 1)
          ret[t] = grabAttribute(key, obj)
      } else {
          ret[key] = obj[key]
      }
      return ret
  }, {})
}


module.exports = {
  response,
  respondOrRedirect,
  only
}