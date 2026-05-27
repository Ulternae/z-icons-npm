import React from 'react';

export interface CoreUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUnlock: React.FC<CoreUnlockProps>;
export default CoreUnlock;
