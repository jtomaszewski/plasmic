## API Report File for "@plasmicapp/query"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Fetcher } from 'swr';
import { Key } from 'swr';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { SWRConfiguration } from 'swr';
import { SWRResponse } from 'swr';
import { useSWRConfig } from 'swr';

// @public
export function addLoadingStateListener(listener: LoadingStateListener, opts?: {
    immediate?: boolean;
}): () => void;

// @public (undocumented)
export function isPlasmicPrepass(): boolean;

// @public (undocumented)
export type LoadingStateListener = (isLoading: boolean) => void;

// @public (undocumented)
export function PlasmicPrepassContext(props: PropsWithChildren<{
    cache: Map<string, any>;
}>): React_2.JSX.Element;

// @public (undocumented)
export function PlasmicQueryDataProvider(props: {
    suspense?: boolean;
    children: React_2.ReactNode;
    prefetchedCache?: Record<string, any>;
}): React_2.JSX.Element;

export { SWRResponse }

// @public
export function useMutablePlasmicQueryData<T, E>(key: Key, fetcher: Fetcher<T>, options?: SWRConfiguration<T, E>): SWRResponse<T, E> & {
    isLoading?: boolean;
    isLagging?: boolean;
};

// @public (undocumented)
export const usePlasmicDataConfig: typeof useSWRConfig;

// @public
export function usePlasmicQueryData<T>(key: Key, fetcher: Fetcher<T>): {
    data?: T;
    error?: Error;
    isLoading?: boolean;
};

export { useSWRConfig }

// @public
export function wrapLoadingFetcher<T extends (...args: any[]) => Promise<any> | any>(fetcher: T): T;

// (No @packageDocumentation comment for this package)

```