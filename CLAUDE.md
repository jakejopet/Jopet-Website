# CLAUDE.md: Jopet-Website

The public website for Jopet Group: static HTML, CSS, `site.js`, and an inline script in `credit-application.html`; no build step. The enquiry and credit-application forms post to web3forms, which emails the company inbox.

**This repository is public.** Never commit anything private: staff names beyond what the site already publishes, internal system details, customer data, keys, tokens or credentials. **Exception:** the web3forms `access_key` in the forms is public by design (web3forms works that way). Leave it in place, or both forms stop working.

## Claude has the reins (owner's decision, 16/11/2026)
Claude decides, builds, checks its own work three times, merges and ships. The owner's only job is the prompt. If you are genuinely unsure what is wanted, ask. Otherwise make the judgement call, within reason.

- Work on a branch and open a pull request. Never push to `main`.
- **Claude merges its own PR** (squash, with the expected head SHA) once all three checks pass:
  1. **Check it works:** every changed page opens, internal links and assets resolve, there are no console errors in `site.js` or the inline scripts, a test form submission is not needed (it would email the inbox), and the page works at phone width (16px gutters, no sideways scroll). Check with a headless browser where available.
  2. **Independent review:** a fresh subagent reviews the diff, never your summary of it, and says READY. A change to a form, to where a form sends, or to the credit application also gets a second fresh reviewer. Fix every blocker and have it re-reviewed.
  3. **Live checks:** any CI checks on the PR are green, and the preview (if the host builds one) loads.
- After merge, confirm the live site loads the change. If it broke something, open and merge a revert PR straight away, then fix it properly.

## Never automatic
- **Customers and money:** nothing on this site may start charging, sending invoices or reminders, or moving money. The enquiry and credit-application forms only deliver to the company inbox, and a person replies.
- **Where the forms send:** web3forms is the only service that receives form contents. Never add analytics or other third-party scripts that would. Changing a form's destination needs the second reviewer, and the report must say so.
- **These rules:** change this file only when the owner asks.

## Conventions
- Australian English. Dates DD/MM/YYYY on the page. Currency always labelled (AUD; PGK for PNG work).
- No corporate filler. Never leave a placeholder unflagged: mark it `[OWNER TO CONFIRM: ...]`.
- Keep the existing look and structure. Reuse `styles.css` classes rather than adding near-duplicates.

## Report (every result)
At most five lines, plain English: the result, what changed on the site, any decision you made and why, and the PR link saying whether it is merged.
