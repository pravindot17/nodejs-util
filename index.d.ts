// Type definitions for Nodejs Utils
// Project: https://github.com/pravindot17/nodejs-util
// Definitions by: Pravin Lolage
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'nodejs-util'

export function isNull(obj: any): boolean
export function isNotNull(obj: any): boolean
export function isArray(array: any): boolean
export function isFilledArray(arr: any): boolean
export function isEmpty(obj: any): boolean
export function isNotEmpty(obj: any): boolean
export function formatNumber(num: number, decimals?: number): string
export async function sleep(time: number): Promise<any>