function handshake(code, ores) {
  var data = querystring.stringify({
    grand_type: "authorization_code",
    code: code,
    redirect_uri: OauthParams.client_id,
    client_secret: OauthParams. client_secret,
  });

  var options = {
    host: 'www.linkedin.com',
    path: '/oauth/v2/accessToken',
    protocol: 'https',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length' Buffer.byteLength(data)
    }
  };

  var req = http.request(options, function (res) {
    var data = '';
    res.setEncoding('utf-8');
    res.on('data', function (chunk) {
      data += chunk;
    });
  });
  res.on('end', function () {
    insertTodb(JSON.parse(data), function (id) {
      ores.redirect('http://localhost:3000/' + id);
    });
  });
  req.on('error', function (e) {
    console.log("Error on request: " + e.message);
  })
  req.write(data);
  req.end();
}
