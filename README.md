# n8n-nodes-ynab

This is an n8n community node. It lets you use the [YNAB (You Need A Budget)](https://www.ynab.com/) personal budgeting API in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

> **Note:** YNAB monetary amounts are in **milliunits** — 1000 milliunits equals 1 currency unit (e.g. 10000 = $10.00).

### User
- **Get** — Returns information about the authenticated user

### Plan (Budget)
- **Get Many** — Lists all budgets
- **Get** — Returns a single budget with all related entities
- **Get Settings** — Returns date and currency format settings for a budget

### Account
- **Get Many** — Lists all accounts in a budget
- **Get** — Returns a single account
- **Create** — Creates a new account

### Category
- **Get Many** — Lists all categories grouped by category group
- **Get** — Returns a single category
- **Create** — Creates a new category in a category group
- **Update** — Updates a category's name or note
- **Get for Month** — Returns a category for a specific budget month
- **Update for Month** — Updates the budgeted amount for a category in a specific month
- **Create Group** — Creates a new category group
- **Update Group** — Updates a category group's name

### Payee
- **Get Many** — Lists all payees in a budget
- **Get** — Returns a single payee
- **Update** — Updates a payee's name

### Payee Location
- **Get Many** — Lists all payee locations in a budget
- **Get** — Returns a single payee location
- **Get by Payee** — Lists all locations for a specific payee

### Month
- **Get Many** — Lists all budget months
- **Get** — Returns a single budget month with all its categories

### Money Movement
- **Get Many** — Lists all money movements in a budget
- **Get by Month** — Lists money movements for a specific budget month
- **Get Groups** — Lists all money movement groups
- **Get Groups by Month** — Lists money movement groups for a specific budget month

### Transaction
- **Get Many** — Lists all transactions (with optional date and type filters)
- **Get** — Returns a single transaction
- **Create** — Creates a new transaction
- **Update** — Updates a single transaction
- **Update Many** — Updates multiple transactions by ID or import ID
- **Delete** — Deletes a transaction
- **Import** — Triggers import of available transactions from all linked accounts

### Scheduled Transaction
- **Get Many** — Lists all scheduled transactions
- **Get** — Returns a single scheduled transaction
- **Create** — Creates a new scheduled transaction
- **Update** — Updates an existing scheduled transaction
- **Delete** — Deletes a scheduled transaction

## Credentials

This node authenticates using a **YNAB Personal Access Token**.

1. Log in to your YNAB account at [app.ynab.com](https://app.ynab.com).
2. Go to **My Account** (top-right menu) → **Developer Settings**.
3. Under **Personal Access Tokens**, select **New Token**.
4. Enter a descriptive label (e.g. `n8n integration`) and select **Generate**.
5. Copy the generated token — it is only shown once.
6. In n8n, create a new **YNAB API** credential and paste the token into the **Personal Access Token** field.

Refer to the [YNAB API authentication docs](https://api.ynab.com/#authentication) for more information.

## Compatibility

Compatible with n8n 1.60.0 or later.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [YNAB API reference](https://api.ynab.com/v1)
- [YNAB API authentication](https://api.ynab.com/#authentication)
