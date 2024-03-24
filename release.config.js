module.exports = {
	branches: ["main"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/npm",
		[
			"@semantic-release/github",
			{
				assets: [
					{
						path: "dist/*.js",
						label: "JS Bundle",
					},
					{
						path: "dist/*.d.ts",
						label: "Type Definitions",
					},
				],
			},
		],
	],
};
