# Design Guidelines: Invoice & Billing Management Platform

## Design Approach
**System-Based Approach** - Drawing from Stripe Dashboard's clean data presentation, Linear's modern productivity aesthetics, and established SaaS dashboard patterns. This utility-focused application prioritizes efficiency, clarity, and professional trustworthiness.

## Typography System

**Font Families:**
- Primary: Inter (via Google Fonts CDN) - headings, UI elements
- Monospace: JetBrains Mono - invoice numbers, amounts, dates

**Hierarchy:**
- Page Titles: text-3xl font-semibold
- Section Headers: text-xl font-semibold
- Card Titles: text-lg font-medium
- Body Text: text-base font-normal
- Labels: text-sm font-medium
- Captions/Meta: text-xs font-normal
- Financial Amounts: text-lg font-mono (display), text-2xl font-mono (totals)

## Layout System

**Spacing Units:** Standardize on Tailwind units 2, 4, 6, 8, 12, 16
- Component padding: p-4 to p-6
- Section spacing: space-y-6 to space-y-8
- Card gaps: gap-4
- Form field spacing: space-y-4

**Grid Structure:**
- Sidebar Navigation: Fixed width 16rem (w-64)
- Main Content: flex-1 with max-w-7xl container
- Dashboard Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Invoice Tables: Full width with horizontal scroll on mobile

## Core Components

### Navigation
**Sidebar (Desktop):**
- Fixed left sidebar with sections: Dashboard, Invoices, Clients, Expenses, Recurring Billing, Settings
- Icon + label navigation items (use Heroicons)
- Current section indicator (visual emphasis on active item)
- Company logo/name at top
- User profile menu at bottom

**Mobile:**
- Collapsible hamburger menu
- Bottom navigation bar for primary actions

### Dashboard Layout
**Stats Cards Row:**
- 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each card: Revenue this month, Outstanding invoices, Paid invoices, Total expenses
- Large number display with label and trend indicator

**Recent Activity:**
- 2-column layout (lg:grid-cols-2): Recent Invoices (left) + Recent Expenses (right)
- Compact list view with avatars, amounts, status badges

### Invoice Management

**Invoice List:**
- Clean table layout: columns for Invoice #, Client, Amount, Date, Status, Actions
- Status badges: Draft, Sent, Paid, Overdue (pill-shaped, subtle)
- Sortable column headers
- Search and filter controls above table
- Pagination footer

**Invoice Creation Form:**
- Multi-step feel with clear sections
- Client selector (searchable dropdown)
- Line items table (add/remove rows dynamically)
- Right sidebar: Invoice preview summary with running totals
- Bottom action bar: Save as Draft, Send Invoice, Preview PDF buttons

**Invoice Detail View:**
- Split layout: Invoice preview (left 2/3) + Actions sidebar (right 1/3)
- Actions: Download PDF, Send reminder, Record payment, Mark as paid
- Activity timeline showing status changes

### Data Tables
**Standard Table Pattern:**
- Zebra striping (subtle alternating rows)
- Hover state on rows
- Fixed header on scroll
- Right-aligned numeric columns
- Left-aligned text columns
- Action dropdown menu (3-dot icon) in last column

### Forms
**Input Standards:**
- Floating labels or top-aligned labels with consistent spacing
- Input height: h-10 or h-12 for comfortable touch targets
- Focus states with visible outlines
- Error messages below fields (text-sm, with icon)
- Required field indicators

### Recurring Billing Section
**Subscription Cards:**
- Grid of active subscriptions
- Each card shows: Client name, plan details, billing cycle, next payment date, amount
- Quick actions: Pause, Cancel, View details

### Expense Tracking
**Expense Categories:**
- Category filter chips/pills
- Summary cards showing spend by category
- Monthly trend chart (simple line or bar chart using Chart.js or Recharts)
- Expense entry form with receipt upload capability

## Component Library

**Buttons:**
- Primary: Solid treatment for main actions
- Secondary: Outlined treatment for supporting actions
- Ghost: Text-only for tertiary actions
- Icon buttons: Consistent size (h-10 w-10) with centered icons
- Use Heroicons for all button icons

**Cards:**
- Consistent border radius (rounded-lg)
- Subtle shadow (shadow-sm, shadow-md on hover)
- Standard padding (p-6)
- Optional header section with border-bottom divider

**Badges/Pills:**
- Small, rounded-full design
- Status indicators for invoice/payment states
- Category tags for expenses

**Modals:**
- Centered overlay with backdrop
- Max-width constraints (max-w-lg for forms, max-w-4xl for previews)
- Clear close button (X icon in top-right)
- Action buttons in footer (right-aligned)

**Dropdowns/Selects:**
- Custom styled to match design system
- Search functionality for long lists (clients, products)
- Keyboard navigation support

## Icons
**Library:** Heroicons (via CDN)
- Navigation icons: 24x24px outline style
- Action icons: 20x20px outline style
- Status indicators: 16x16px solid style
- Consistent visual weight throughout

## Animations
**Minimal & Purposeful:**
- Page transitions: Simple fade (150ms)
- Dropdown menus: Slide + fade (200ms)
- Toast notifications: Slide in from top-right
- Loading states: Subtle spinner or skeleton screens
- NO decorative animations

## Accessibility
- Semantic HTML throughout (nav, main, article, etc.)
- ARIA labels for icon-only buttons
- Keyboard navigation for all interactive elements
- Focus indicators always visible
- Form validation with clear error messages
- Table headers properly marked
- Screen reader announcements for status changes

## Images
**No Hero Image** - This is a utility dashboard application

**Where Images Appear:**
- Company logo in sidebar (placeholder: <!-- COMPANY LOGO -->)
- Client avatars in lists (fallback to initials in circle)
- Receipt thumbnails in expense entries
- Empty states: Friendly illustrations for "No invoices yet" screens

**Empty State Illustrations:**
- Use simple, minimalist SVG illustrations or placeholder comments
- Centered in content area with helpful messaging and action button

## PDF Invoice Design
Match dashboard aesthetic with:
- Clean header with company details
- Professional table layout for line items
- Clear total calculations section
- Payment instructions and terms at bottom
- Subtle grid or minimal decorative elements

## Professional Polish
- Consistent spacing rhythm across all sections
- Generous white space to reduce cognitive load
- Clear visual hierarchy prioritizing financial data
- Professional, trustworthy appearance suitable for B2B context
- Data-dense but never cluttered
- Mobile-responsive with priority on desktop experience