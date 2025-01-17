import { process, FSClass } from "petit-fs";
export { PathUtil, getRootFS, fs, path, os, process, Buffer, LSFS, FSClass } from "petit-fs";
import { FileSystemFactory, SFile } from "@hoge1e3/sfile";
export { zip } from "./zip.js";
export { SFile } from "@hoge1e3/sfile";
export declare const nodePolyfill: {
    fs: import("petit-fs/src/vfsUtil.js").FileSystem;
    path: {
        isAbsolute(path: string): boolean;
        toAbsolute(path: string): string;
        basename(path: string, ext?: string): string;
        resolve(head: string, ...rest: string[]): string;
        join(...paths: string[]): string;
        relative(from: string, to: string): string;
        dirname(path: string): string | undefined;
        extname(path: string): string;
    };
    os: {
        platform: () => string;
        EOL: string;
    };
    process: {
        __fs: import("petit-fs/src/vfsUtil.js").FileSystem | undefined;
        _cwd: string;
        env: {
            [key: string]: string;
        };
        argv: string[];
        execArgv: string[];
        pid: number;
        stdout: {
            write(...a: any[]): void;
            columns: number;
        };
        memoryUsage(): {
            heapUsed: number;
        };
        exit(): void;
        __setfs(fs: import("petit-fs/src/vfsUtil.js").FileSystem): void;
        cwd(): string;
        chdir(path: string): void;
        nextTick(): void;
    };
    Buffer: BufferConstructor;
};
export declare const FS: FileSystemFactory;
export declare function get(path: string): SFile;
export declare function mount(mountPoint: string, fs: string | FSClass): void;
export declare function unmount(mountPoint: string): void;
export declare function getEnv(name: string): string;
export declare function getEnv(): typeof process.env;
export declare function setEnv(name: string, value: string): void;
export declare function init(): void;
export declare function expand(str: string): string;
export declare function expandPath(path: string): string;
export declare const Env: {
    expand: typeof expand;
    expandPath: typeof expandPath;
    get: typeof getEnv;
    set: typeof setEnv;
};
export declare function resolve(path: SFile | string, base?: SFile | string): SFile;
