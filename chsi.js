let body = $response.body;

body = body.replace(
/"xllb":"[^"]*"/,
'"xllb":"普通高等教育"'
);

$done({
  body: body
});
