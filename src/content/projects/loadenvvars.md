---
title: CLI to load enviroments securely
excerpt: A CLI tool to load environment variables from a secure vault into your local environment.
publishDate: Octuber 8 2025
tags:
  - typescript
commentsEnabled: true
---

CLI in TypeScript to list environment variables defined in `~/.config/loadenvs/variables.yaml`.

### Usage:

Default path: `~/.config/loadenvs/variables.yaml`

Example:

```yaml
# ~/.config/loadenvs/variables.yaml
NODE_ENV: development
API_URL: https://api.example.com
LOG_LEVEL: info
PORT: 8080
SECRET: 'value with spaces and symbols !@#'
```

Values are read as strings (or number/boolean if appropriate) and printed with the chosen format.

## Usage

```bash
loadenvvars --help
```

### Options

- `--format table|dotenv|export|json` Output format (default `table`).
- `--file <path>` Alternative YAML path.
- `--only <key...>` Filter by specific keys.
- `--keys` Only show variable names.

### Examples

- Show in table (default):

```bash
loadenvvars
```

- Generate a `.env`:

```bash
loadenvvars --format dotenv > .env
```

- Export for the current shell session:

```bash
eval "$(loadenvvars --format export)"
```

- Filter by specific keys:

```bash
loadenvvars --only API_URL PORT --format json
```

### Important note

A child process (this CLI) cannot modify the variables of the parent process (your shell). To "load" the variables in your session, use `eval` with `--format export` as shown above, or redirect to a `.env` file that your tool consumes.

[View on GitHub](https://github.com/parraletz/loadenvvars)
