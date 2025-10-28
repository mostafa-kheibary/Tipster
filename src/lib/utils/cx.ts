export const cx = (classes: Record<string, boolean | undefined>) => {
	const classNames = [];
	for (const className in classes) {
		if (classes[className]) classNames.push(className);
	}
	return classNames;
};
