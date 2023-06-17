import { writable, type Writable } from 'svelte/store';

export const languages = ['en', 'fr'];

export const languageStore: Writable<string> = writable('en');
