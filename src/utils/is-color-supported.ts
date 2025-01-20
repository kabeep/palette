import tty from 'node:tty';

function isColorSupported(count?: number) {
    return tty?.WriteStream?.prototype?.hasColors?.(count) ?? false;
}

export default isColorSupported;
