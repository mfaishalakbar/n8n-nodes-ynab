# n8n community node

## Overview
This is a project containing code for an n8n community node. n8n is a workflow
automation platform where users build workflows with nodes, which are the
building block of a workflow. Nodes can perform a range of actions, such as
starting a workflow (called a "trigger node"), fetching and sending data, or
processing and manipulating it. Besides that there are credentials - entities
that store sensitive information on how to connect to external services and
APIs. A node can require some credentials to be used. Community nodes are a way
for anyone to create such nodes and add them to be used in n8n. All community
nodes are named in a format: `n8n-nodes-<n>` or `@org/n8n-nodes-<n>`.
Community nodes can also be submitted for approval to be used on n8n Cloud
version. In that case there are rules that the node needs to follow in order to
be approved

## Important notes
- Follow the **rules and guidelines in this document and the linked docs
  below** over any code examples.
- All code blocks in these docs are **illustrative and incomplete**.
  They **MUST NOT** be copied verbatim or assumed to be the final desired code.
- Replace example names like `Example`, `Wordpress`, `wordpressApi`, etc.
  with names that match the **actual service / node** you are building.
- When in doubt, **generalize from the patterns**, don't replicate the exact
  structure, fields, or values from the examples.
- Produce the **full implementation** needed for the current project
  (nodes, credentials, tests, etc.), not just fragments similar to examples.
- If an example omits parts (e.g. types, operations, properties), **infer and
  implement the missing parts** based on the real requirements / API docs.
- Never output `Wordpress`-specific code unless the project is actually about
  WordPress.

## This project

This package implements an n8n community node for the **YNAB (You Need A
Budget) API** (`https://api.ynab.com/v1`). It is a **declarative-style** node
that covers all YNAB API resource groups.

Key domain knowledge:
- YNAB monetary amounts are in **milliunits** (1000 milliunits = 1 currency
  unit, e.g. 10000 = $10.00). Always note this in field descriptions.
- The `planId` (Budget ID) field defaults to `"last-used"`, which the API
  treats as a shortcut to the user's most recently used budget. `"default"` is
  also a valid special value.
- Dates use ISO format `YYYY-MM-DD`. Month parameters also accept `"current"`.
- Authentication is via **Personal Access Token** (Bearer scheme). The
  credential is `YnabApi`.
- All API responses are wrapped in `{ data: { <key>: ... } }`. The shared
  `extractResponse(key)` utility in `nodes/ynab/shared/postReceive.ts` unwraps
  this envelope in every operation's `postReceive` handler.
- The `flag_color` field intentionally lists `None` first (before the colour
  names) as a UX choice; the sort lint rule is suppressed inline for those
  options arrays.

## Project structure

```
.
├── credentials/
│   └── YnabApi.credentials.ts       # Bearer-token PAT credential
├── nodes/
│   └── ynab/
│       ├── Ynab.node.ts             # Main node class
│       ├── Ynab.node.json           # Codex / category metadata
│       ├── shared/
│       │   ├── descriptions.ts      # Shared field definitions (planIdField)
│       │   ├── postReceive.ts       # extractResponse() envelope unwrapper
│       │   └── transport.ts        # ynabApiRequest() HTTP helper
│       ├── user/
│       │   └── index.ts
│       ├── plan/
│       │   ├── index.ts
│       │   ├── get.ts
│       │   ├── getAll.ts
│       │   └── getSettings.ts
│       ├── account/
│       │   ├── index.ts
│       │   ├── get.ts
│       │   ├── getAll.ts
│       │   └── create.ts
│       ├── category/
│       │   ├── index.ts
│       │   ├── get.ts
│       │   ├── getAll.ts
│       │   ├── create.ts
│       │   ├── update.ts
│       │   ├── getForMonth.ts
│       │   ├── updateForMonth.ts
│       │   ├── createGroup.ts
│       │   └── updateGroup.ts
│       ├── payee/
│       │   ├── index.ts
│       │   ├── get.ts
│       │   ├── getAll.ts
│       │   └── update.ts
│       ├── payeeLocation/
│       │   ├── index.ts
│       │   ├── get.ts
│       │   ├── getAll.ts
│       │   └── getByPayee.ts
│       ├── month/
│       │   ├── index.ts
│       │   ├── get.ts
│       │   └── getAll.ts
│       ├── moneyMovement/
│       │   ├── index.ts
│       │   ├── getAll.ts
│       │   ├── getByMonth.ts
│       │   ├── getGroups.ts
│       │   └── getGroupsByMonth.ts
│       ├── transaction/
│       │   ├── index.ts
│       │   ├── get.ts
│       │   ├── getAll.ts
│       │   ├── create.ts
│       │   ├── update.ts
│       │   ├── updateMany.ts
│       │   ├── delete.ts
│       │   └── import.ts
│       └── scheduledTransaction/
│           ├── index.ts
│           ├── get.ts
│           ├── getAll.ts
│           ├── create.ts
│           ├── update.ts
│           └── delete.ts
├── icons/
│   └── ynab.svg
├── package.json
└── ...
```

Each API resource group has its own subfolder under `nodes/ynab/`. The
`index.ts` in each folder defines the operation selector and combines all
operation property arrays. Each individual operation lives in its own file
(e.g. `get.ts`, `getAll.ts`, `create.ts`).

`package.json` has a special `n8n` field with paths to the compiled output:
```json
{
  "n8n": {
    "credentials": ["dist/credentials/YnabApi.credentials.js"],
    "nodes": ["dist/nodes/ynab/Ynab.node.js"]
  }
}
```
If you add, remove, or rename nodes or credentials, update these paths.

## Key guidelines
- Use the `n8n-node` CLI tool **whenever possible** for building, dev mode,
  linting, etc.
- **Always** address any lint/typecheck errors/warnings, unless there is a
  **very specific reason** to ignore/disable it
- Make sure to use **proper types whenever possible**
- If you are updating the npm package version, make sure to **update
  CHANGELOG.md** in the root of the repository
- Read `.agents/workflow.md` for more info

## Context-specific docs
Load these before working on the relevant area:

| Working on...                        | Read first                                                          |
|--------------------------------------|---------------------------------------------------------------------|
| Any node file in `nodes/`            | `.agents/nodes.md` and `.agents/properties.md`                      |
| A declarative-style node             | above + `.agents/nodes-declarative.md`                              |
| A programmatic-style node            | above + `.agents/nodes-programmatic.md`                             |
| Files in `credentials/`              | `.agents/credentials.md`                                            |
| Adding a new version to a node       | `.agents/versioning.md`                                             |
| Starting a new task or planning      | `.agents/workflow.md`                                               |

## Additional resources
If you need any extra information, here are links to n8n's official docs
regarding building community nodes:
- https://docs.n8n.io/integrations/community-nodes/build-community-nodes/
- https://docs.n8n.io/integrations/creating-nodes/overview/
- https://docs.n8n.io/integrations/creating-nodes/build/reference/
- https://docs.n8n.io/integrations/creating-nodes/build/reference/ux-guidelines/
