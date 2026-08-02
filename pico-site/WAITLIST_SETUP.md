# Setting up the waitlist → Google Sheets

The signup form on the homepage sends emails to `/api/waitlist`, which
appends them as rows in a Google Sheet you control. Nothing works until
you complete the steps below — the form will show an error until then.

This takes about 10 minutes, one time.

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   sheet.
2. Rename it whatever you like (e.g. "Pico waitlist").
3. Rename the first tab (bottom-left) to exactly `Waitlist` — the code
   expects this tab name.
4. In row 1, add headers: `Email`, `Submitted at`, `Source page`.
5. Copy the **spreadsheet ID** out of the URL. If the URL is:
   `https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOp/edit`
   the ID is `1AbCdEfGhIjKlMnOp`. Save this somewhere.

## 2. Create a Google Cloud service account

This gives your website its own "robot" Google identity that's allowed
to write to just this one sheet — not your whole Google account.

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
   and create a new project (top-left project switcher → New project).
   Name it anything, e.g. "pico-website".
2. In the search bar, search **"Google Sheets API"** and click **Enable**.
3. In the search bar, search **"Service accounts"** and open that page.
4. Click **Create service account**. Name it e.g. "pico-waitlist-writer".
   Skip the optional permission/role steps — click through to **Done**.
5. Click into the service account you just created → the **Keys** tab →
   **Add key** → **Create new key** → choose **JSON** → **Create**.
   A `.json` file downloads. Keep it private — treat it like a password.
6. Open that JSON file in a text editor. You need two values from it:
   - `client_email` — looks like `pico-waitlist-writer@your-project.iam.gserviceaccount.com`
   - `private_key` — a long string starting with `-----BEGIN PRIVATE KEY-----`

## 3. Share the sheet with the service account

1. Back in your Google Sheet, click **Share** (top-right).
2. Paste in the `client_email` value from the JSON file.
3. Give it **Editor** access. Uncheck "Notify people" (it's a robot, it
   won't read the email). Click **Share**.

## 4. Add environment variables

You need three values available to your deployed site:

| Variable | Value |
|---|---|
| `GOOGLE_SHEETS_CLIENT_EMAIL` | the `client_email` from the JSON file |
| `GOOGLE_SHEETS_PRIVATE_KEY` | the `private_key` from the JSON file, **including** the `-----BEGIN...` / `-----END...` lines |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | the spreadsheet ID from step 1 |

**On Vercel** (where this site should be deployed, per the project's tech
stack): go to your project → **Settings** → **Environment variables** →
add all three → redeploy.

**For local testing**, create a file named `.env.local` in the project
root (it's already git-ignored, so it won't get committed):

```
GOOGLE_SHEETS_CLIENT_EMAIL=pico-waitlist-writer@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=1AbCdEfGhIjKlMnOp
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"
```

The private key must stay on one line with `\n` for line breaks, wrapped
in quotes — that's how the JSON file already formats it, so you can
usually copy it straight across.

## 5. Test it

```bash
npm run dev
```

Go to `http://localhost:3000#signup`, submit a test email, then check
the Google Sheet — a new row should appear within a couple seconds.

## Where this fits in the codebase

- `app/api/waitlist/route.ts` — the server-side route that validates the
  email and writes the row. This is the only place that touches your
  Google credentials; they never reach the browser.
- `components/sections/Newsletter.tsx` — the form. It calls the route
  above via `fetch` and shows loading/success/error states.

## A note on GitHub Pages

If you were planning to host this on plain **GitHub Pages** rather than
Vercel: GitHub Pages only serves static files and cannot run
`app/api/waitlist/route.ts` at all — the form would have nowhere to send
data. Deploying via Vercel (which builds straight from your GitHub repo,
so your GitHub workflow stays the same) is what makes this API route
work.
