<div align="center">
  <img src="public/icons/logo.svg" alt="Horizon logo" width="72" />
  <h1>Horizon Banking</h1>
  <p><strong>Modern full-stack banking platform built with Next.js, TypeScript, and Tailwind CSS.</strong></p>
  <a href="https://github.com/sponsors/saikattanti"><img src="https://img.shields.io/badge/Sponsor-GitHub%20Sponsors-blue?logo=github" alt="Sponsor on GitHub" /></a>
</div>

## Overview

Horizon Banking is a modern financial web application experience focused on clear account visibility, transaction tracking, and intuitive money movement workflows.

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?logo=chartdotjs&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-Backend-F02E65?logo=appwrite&logoColor=white)
![Plaid](https://img.shields.io/badge/Plaid-Integration-111111)
![Dwolla](https://img.shields.io/badge/Dwolla-Payments-FF7400)

## Features

- Authentication pages for sign-in and sign-up flows.
- Banking dashboard with greeting and total balance insights.
- Multi-bank account overview components.
- Transaction-oriented sections for history and transfer workflows.
- Interactive doughnut chart and animated balance counters.
- Responsive navigation (desktop sidebar + mobile navigation).

## Installation & Setup

### Prerequisites

- Node.js 18+
- npm 9+

### 1. Clone the repository

```bash
git clone https://github.com/saikattanti/banking.git
cd banking
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the repository root and add values:

```bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
NEXT_APPWRITE_KEY=
PLAID_CLIENT_ID=
PLAID_SECRET=
DWOLLA_ENV=sandbox
DWOLLA_KEY=
DWOLLA_SECRET=
```

> Use sandbox/test credentials only. Never commit real secrets.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start local development server.
- `npm run lint` - Run Next.js ESLint checks.
- `npm run build` - Build production artifacts.
- `npm run start` - Start production server.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before submitting issues or pull requests.

## Security

If you discover a vulnerability, please review [SECURITY.md](SECURITY.md) for responsible disclosure steps.

## License

This project is licensed under the [MIT License](LICENSE).
