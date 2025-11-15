# SFS Invoice & Billing

Invoice generation and billing management system with payment tracking and Stripe integration.

## Overview

Comprehensive invoicing and billing solution for SmartFlow Systems clients with automated invoice generation, payment processing, and financial reporting.

## Features

- Automated invoice generation
- Stripe payment integration
- PDF invoice creation
- Email delivery
- Payment tracking and reconciliation
- Recurring billing support
- Tax calculation
- Multi-currency support
- Payment reminders
- Financial reporting and analytics

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Payment**: Stripe
- **PDF**: Puppeteer
- **Email**: SendGrid/SMTP
- **UI**: shadcn/ui, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Stripe account
- SMTP email service

### Installation

```bash
npm install
cp .env.example .env
# Configure Stripe keys and SMTP settings
npm run dev
```

## Usage

### Creating an Invoice

```typescript
const invoice = await createInvoice({
  customerId: 'cus_xxx',
  items: [
    { description: 'Service Fee', amount: 10000, quantity: 1 }
  ],
  currency: 'USD',
  dueDate: new Date('2025-12-31')
});
```

### Processing Payment

```typescript
const payment = await processPayment({
  invoiceId: 'inv_xxx',
  paymentMethodId: 'pm_xxx'
});
```

## Invoice Templates

Customizable invoice templates with company branding, located in `/templates`.

## Stripe Webhooks

Configure webhook endpoint: `https://your-domain.com/api/webhooks/stripe`

Supported events:
- `payment_intent.succeeded`
- `payment_intent.failed`
- `invoice.paid`
- `invoice.payment_failed`

## SmartFlow Design System

Professional billing interface with:
- SFS branding
- Responsive invoice views
- Print-optimized layouts
- Accessible forms

## Development

```bash
npm run dev        # Development server
npm run build      # Production build
npm run db:push    # Database migrations
npm test           # Run tests
```

## License

Proprietary - SmartFlow Systems
