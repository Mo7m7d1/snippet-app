export const validateData = (formData: CodeSnippetInput) => {
	const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	const isMalicious =
		scriptRegex.test(formData.title) ||
		scriptRegex.test(formData.description) ||
		scriptRegex.test(formData.language);

	if (isMalicious) {
		alert('Invalid input. Please remove any scripts or potentially harmful content.');
		return false;
	}

	return true;
};
