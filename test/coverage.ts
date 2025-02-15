import { test } from '@playwright/test';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

// TODO Could this be a package?

// See also https://playwright.dev/docs/api/class-coverage

const publicDir = 'public';
const coverageDir = process.env.NODE_V8_COVERAGE;

if (coverageDir) {
  test.beforeEach(async ({ page }) => {
    try {
      await page.coverage.startJSCoverage();
    } catch {
      // ignore
    }
  });

  test.afterEach(async ({ page }) => {
    try {
      const coverage = await page.coverage.stopJSCoverage();

      const output = {
        result: coverage.map((entry) => ({
          ...entry,
          url: entry.url.replace(
            /https?:\/\/localhost:\d+/,
            `file://${path.resolve(publicDir)}`,
          ),
        })),
      };

      await fs.promises.mkdir(coverageDir, { recursive: true });
      await fs.promises.writeFile(
        path.join(coverageDir, `coverage-${crypto.randomUUID()}.json`),
        JSON.stringify(output),
      );
    } catch {
      // ignore
    }
  });
}
