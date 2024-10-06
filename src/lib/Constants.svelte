<script context="module" lang="ts">
	export const friendlyDates: any = {
		'2023-10-12': 'jeu. 12 oct.',
		'2023-10-13': 'ven. 13 oct.',
		'2023-10-14': 'sam. 14 oct.',
		'2023-10-15': 'dim. 15 oct.',
		'2023-10-16': 'lun. 16 oct.'
	};

	export const normalizeString = (str: string) => str.normalize('NFD').replace(/\p{Diacritic}/gu, '');

	export const sanitizeFilename = (input: string, replacement: string = "") => {
		if (typeof input !== 'string') {
			throw new Error('Input must be string');
		}

		const illegalRe = /[\/\?<>\\:\*\|"]/g;
		const controlRe = /[\x00-\x1f\x80-\x9f]/g;
		const reservedRe = /^\.+$/;
		const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
		const windowsTrailingRe = /[\. ]+$/;

		const sanitized = input
			.replace(illegalRe, replacement)
			.replace(controlRe, replacement)
			.replace(reservedRe, replacement)
			.replace(windowsReservedRe, replacement)
			.replace(windowsTrailingRe, replacement);

		// Trim text to 255 bytes
		let enc = new TextEncoder();
		let dec = new TextDecoder('utf-8');
		let uint8 = enc.encode(sanitized);
		let section = uint8.slice(0, 255);

		return dec.decode(section);
	};
</script>
