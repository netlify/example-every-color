const { builder } = require('@netlify/functions');

async function handler(event) {
    const [, type, ...colorParts] = event.path.split('/');

    const time = new Date().toString();
    console.log(`Time: ${time}`);
    console.log({ type, colorParts });

    if (!type || !colorParts) {
        return {
            statusCode: 404,
            body: 'Not Found',
        };
    }

    let cssVal;
    switch (type) {
        case 'hex':
            const [hex] = colorParts;
            cssVal = `#${hex}`;
            break;

        case 'rgb':
            const [r, g, b] = colorParts;
            cssVal = `rgb(${r} ${g} ${b} / 1)`;
            break;

        case 'named':
        default:
            const [color] = colorParts;
            cssVal = color;
            break;
    }

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Color: ${cssVal}</title>
  <link rel="stylesheet" href="/css/styles.css" />
  <style>
  ::root {
    --selected-color: ${cssVal}
  }
    body {
      background-color: ${cssVal};
      
    }
  </style>
</head>
<body>
  <main> 
    <div class="content">
      <h1>Color: ${cssVal}</h1>
      <p><a href="/">&larr; back to home</a></p>
      <p class="timestamp">Generated at:<br />${time}</p>
    </div>
  </main>
</body>
</html>
`,
    };
}

exports.handler = builder(handler);