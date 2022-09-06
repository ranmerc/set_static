import { getSheet } from '../../../lib/googleSheets';

export async function getEventValues() {
  const results = await getSheet('event-details!A2:I');

  if (!results.hasOwnProperty('values')) {
    const error = new Error('Sheet Empty');
    error.reason = 'Sheet Empty';
    throw error;
  }

  return results.values;
}

export default async function handler(req, res) {
  try {
    const values = await getEventValues();
    res.status(200).json({ statusCode: 200, values: values });
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
