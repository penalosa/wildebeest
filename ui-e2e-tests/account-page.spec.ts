import { test, expect } from '@playwright/test'

test('Navigation to and view of an account', async ({ page }) => {
	await page.goto('http://127.0.0.1:8788/explore')
	await page.getByRole('article').getByRole('link', { name: 'Ben Rosengart', exact: true }).click()
	await page.getByRole('link', { name: 'Ben Rosengart', exact: true }).click()
	await page.waitForLoadState('networkidle')
	await page.getByRole('link', { name: 'Ben Rosengart', exact: true }).click()
	await expect(page.getByRole('img', { name: 'Header of Ben Rosengart' })).toBeVisible()
	await expect(page.getByRole('img', { name: 'Avatar of Ben Rosengart' })).toBeVisible()
	await expect(page.getByRole('heading', { name: 'Ben Rosengart' })).toBeVisible()
	await expect(page.getByText('Joined')).toBeVisible()
	await expect(page.getByTestId('stats')).toHaveText('1Posts0Following0Followers')
})
