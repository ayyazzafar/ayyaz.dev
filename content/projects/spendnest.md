---
title: SpendNest
slug: spendnest
status: active
type: product
description: Full-featured expense tracking application with AI-powered transaction entry, budgeting, recurring expenses, and multi-account management
longDescription: A comprehensive personal finance application built to handle household expenses with features like AI-assisted transaction entry, budget tracking, recurring expense automation, account transfers, and detailed analytics.
tech:
  - Laravel
  - Filament
  - PostgreSQL
  - Tailwind CSS
  - Alpine.js
url: https://spendnest.ayyaztech.com
started: "2024"
featured: true
order: 1
screenshots:
  - /screenshots/spendnest/spendnest-dashboard.png
  - /screenshots/spendnest/spendnest-transaction-create.png
  - /screenshots/spendnest/spendnest-transactions.png
  - /screenshots/spendnest/spendnest-recurring.png
  - /screenshots/spendnest/spendnest-budgets.png
  - /screenshots/spendnest/spendnest-accounts.png
  - /screenshots/spendnest/spendnest-transfers.png
  - /screenshots/spendnest/spendnest-categories.png
  - /screenshots/spendnest/spendnest-vendors.png
  - /screenshots/spendnest/spendnest-settings.png
---

## About SpendNest

SpendNest is my personal expense tracking application, built because existing solutions didn't fit my workflow. I needed something powerful enough to handle multiple accounts, shared household expenses, detailed categorization, and recurring bill tracking — without the bloat of enterprise financial software.

## Key Features

### AI-Powered Transaction Entry
Describe your transaction in natural language like *"Spent Rs 5000 at Carrefour for groceries yesterday"* and let AI parse it into structured data. No more tedious form filling.

### Comprehensive Dashboard
- **Real-time spending analytics** with monthly trends and category breakdowns
- **Budget progress bars** showing actual vs. projected spending
- **Upcoming recurrences** so you never miss a bill
- **Account balances** across all your bank accounts and credit cards

### Budget Management
Set budgets by category with flexible periods:
- **Daily** budgets for everyday spending limits
- **Monthly** budgets for regular expenses
- **Yearly** budgets for things like travel or annual subscriptions

### Recurring Expense Automation
- Automatic transaction generation for bills and subscriptions
- Support for **weekly, monthly, and custom frequencies**
- Visual charts showing distribution by frequency and category
- **Overdue tracking** to catch missed payments

### Multi-Account Support
- Track multiple bank accounts, credit cards, and cash wallets
- **Running balance** calculation on every transaction
- Inter-account **transfers** for savings and credit card payments
- Multi-currency support with PKR, USD, and more

### Rich Categorization
- **19 expense categories** from Groceries to Travel
- **54+ vendors** for tracking where you shop
- **People tracking** for shared household expenses
- **Payment methods** for understanding spending patterns
- **Tags** for flexible grouping

## Technical Highlights

- **Built with Laravel and Filament** — Modern PHP with a beautiful admin panel
- **PostgreSQL database** for reliable financial data
- **Real-time calculations** — Running balances update instantly
- **Responsive design** — Works on desktop and mobile
- **Multi-tenant architecture** — Each user's data is completely isolated

## Why I Built It

Most expense trackers are either too simple (just a list of transactions) or too bloated (trying to be a full accounting system). SpendNest is exactly what I need for managing household finances — powerful enough for detailed tracking, simple enough for daily use.

Since I control the code, I can add features as my needs evolve. Recent additions include the AI transaction parser and the recurring expense automation system.
