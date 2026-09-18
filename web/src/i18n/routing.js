import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { LOCALES, PREFIXES } from '@/utils/constants';

export const routing = defineRouting({
    locales: LOCALES,
    defaultLocale: 'hy',
    localePrefix: {
        mode: 'always',
        prefixes: PREFIXES
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);