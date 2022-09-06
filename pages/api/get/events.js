import { getSheet } from '../../../lib/googleSheets';

export default async function handler(req, res) {
  try {
    const results = await getSheet('event-details!A2:G');

    if (!results.hasOwnProperty('values')) {
      const error = new Error('Sheet Empty');
      error.reason = 'Sheet Empty';
      throw error;
    }

    res.status(200).json({ statusCode: 200, values: results.values });
    return;
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      statusCode: 500,
      data: e,
    });
    return;
  }
}
