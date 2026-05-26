import React from 'react';

export interface LanSignatureLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureLock: React.FC<LanSignatureLockProps>;
export default LanSignatureLock;
