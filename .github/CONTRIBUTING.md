# 🤝 Contributing

Thank you for your interest in contributing to kumolo-docs!
We welcome content improvements, corrections, new pages, and other suggestions.

## 🪧 Before You Start

- Check if there's an existing [issue](https://github.com/optiflowic/kumolo-docs/issues) for your idea.
- If you're not sure how to proceed, feel free to open a `question` issue or start a [Discussion](https://github.com/optiflowic/kumolo/discussions).

## 📝 Reporting Issues

- Use the `Documentation Update` template for content issues (incorrect info, unclear wording, missing sections).
- Use the `Bug Report` template for site issues (broken links, rendering errors).

## 🛠️ Making Pull Requests

- Fork the repository and create a feature branch from `main`.
- Name your branch: `feature/<issue-number>-<short-description>` (e.g. `feature/8-contributing-page`).
- Follow [Conventional Commits](https://www.conventionalcommits.org/) (`docs:`, `feat:`, `fix:`, etc.).
- Prefix PR and issue titles with the appropriate tag:

  | Tag          | When to use                    |
  | ------------ | ------------------------------ |
  | `[Docs]:`    | Documentation content changes  |
  | `[Feature]:` | New site functionality         |
  | `[Bug]:`     | Bug fixes                      |
  | `[Task]:`    | Infrastructure or tooling work |

- Preview your changes locally before submitting.
- Link to the related issue using `Closes #123`.

## 💻 Local Development

Node.js 24+ is required.

```bash
npm install
npm run dev
```

Then open `http://localhost:4321` in your browser.

### Common Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start local dev server           |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |

## 📂 Content Structure

All documentation lives under `src/content/docs/`. The sidebar is configured in `astro.config.ts`.

```
src/content/docs/
  index.mdx              # Home page
  getting-started.mdx    # Installation and SDK config
  services/
    s3.mdx               # S3 supported operations
    dynamodb.mdx         # DynamoDB supported operations
    sts.mdx              # STS supported operations
```

### Adding a new page

1. Create `src/content/docs/<path>.mdx` with `title` and `description` frontmatter.
2. Add the page to the `sidebar` array in `astro.config.ts`.
3. Preview with `npm run dev`.

### Updating a supported operations table

Before adding an operation to a service page, verify it is implemented in the [kumolo](https://github.com/optiflowic/kumolo) source:

| Service  | File                          |
| -------- | ----------------------------- |
| S3       | `internal/s3/router.go`       |
| DynamoDB | `internal/dynamodb/router.go` |
| STS      | `internal/sts/router.go`      |

Do not document operations that are not yet implemented.

## 🔗 Sync Policy

When a feature PR is merged in [optiflowic/kumolo](https://github.com/optiflowic/kumolo), a corresponding docs PR in this repository **must be linked** before closing the feature issue.

1. Open a feature PR in `optiflowic/kumolo`.
2. Open a docs PR here that reflects the change.
3. Reference each PR in the other's description.
4. Merge the docs PR alongside or shortly after the feature PR.
5. Close the feature issue only after the docs PR is merged.

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](../LICENSE).
