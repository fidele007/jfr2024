import { writable } from "svelte/store";

import type { JsonValue } from "./types/json.type";
import { browser } from "$app/environment";

export const localStore = (key: string, initialValue: JsonValue) => {
	if (!browser) return;

	// receives the key of the local storage and an initial value
	const toString = (value: JsonValue) => JSON.stringify(value, null, 2);
	const toObj = JSON.parse;

	if (localStorage.getItem(key) === null) {
		localStorage.setItem(key, toString(initialValue));
	}

	const saved = toObj(localStorage.getItem(key) ?? "{}");

	// create the underlying writable store
	const { subscribe, set, update } = writable(saved);

	return {
		subscribe,
		set: (value: JsonValue) => {
			// save also to local storage as string
			localStorage.setItem(key, toString(value));
			return set(value);
		},
		update,
	}
};