import React from 'react';

export interface MinaLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLock: React.FC<MinaLockProps>;
export default MinaLock;
