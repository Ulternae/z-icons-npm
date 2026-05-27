import React from 'react';

export interface NeoLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLock: React.FC<NeoLockProps>;
export default NeoLock;
