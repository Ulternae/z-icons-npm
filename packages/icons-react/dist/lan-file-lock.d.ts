import React from 'react';

export interface LanFileLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileLock: React.FC<LanFileLockProps>;
export default LanFileLock;
