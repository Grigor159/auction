import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, prefixes } from '@/utils/constants';

export const routing = defineRouting({
    locales: locales,
    defaultLocale: 'hy',
    localePrefix: {
        mode: 'always',
        prefixes: prefixes
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);