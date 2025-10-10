import { localStore } from './localStore';

export const filterOptions = localStore('filter-options', {
	filterKeyword: '',
	sortAlphabetically: false,
	onlyVideos: false,
	selectedDate: ''
});

export const localMediaHistory = localStore('media-history', []);

export const prefs = localStore('prefs', {
	autoplay: false
});
