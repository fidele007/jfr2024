import { localStore } from './localStore';

export const filterOptions = localStore("filter-options", {
	filterKeyword: '',
	sortAlphabetically: false,
	onlyVideos: false,
	selectedDate: ''
});
