import { appendSheet } from '../../../lib/googleSheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.log('Error: POST expected');

    res.status(405).json({
      statusCode: 405,
      data: { message: 'Only POST requests allowed' },
    });
    return;
  }

  const body = req.body;

  console.log(body);

  if (body == null) {
    console.log('Error: body expected');

    res.status(400).json({
      statusCode: 400,
      data: { message: `'email' query param required.` },
    });
    return;
  }

  if (!body.hasOwnProperty('email')) {
    console.log('Error: email param expected');

    res.status(400).json({
      statusCode: 400,
      data: { message: `'email' query param required.` },
    });
    return;
  }

  try {
    const dateObj = new Date();
    const dateTime = `${dateObj.toLocaleTimeString()} ${dateObj.toLocaleDateString()}`;
    const data = await appendSheet('newsletter-subscribers!A1:B1', [
      [body.email, dateTime],
    ]);
    res.status(200).json({
      statusCode: 200,
      data: data,
    });
    return;
  } catch (e) {
    console.log(e.message);
    res.status(400).json({
      statusCode: 400,
      data: e,
    });
    return;
  }
}
