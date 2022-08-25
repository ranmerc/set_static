import { google } from 'googleapis';

function googleAuth() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  return auth;
}

export async function appendSheet(range, values) {
  const auth = googleAuth();

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: values,
      },
    });

    return new Promise((res, rej) => {
      res(response.data);
    });
  } catch (e) {
    console.log('Something Bad Happened!');
    console.log(e.message);

    return new Promise((res, rej) => {
      rej({ error: e.message });
    });
  }
}

export async function getSheet(range) {
  const auth = googleAuth();

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: range,
    });
    return new Promise((res, rej) => {
      res(response.data);
    });
  } catch (e) {
    console.log('Something Bad Happened!');
    console.log(e.message);

    return new Promise((res, rej) => {
      rej({ error: e.message });
    });
  }
}
