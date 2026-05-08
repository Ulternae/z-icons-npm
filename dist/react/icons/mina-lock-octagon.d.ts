import React from 'react';

export interface MinaLockOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockOctagon: React.FC<MinaLockOctagonProps>;
export default MinaLockOctagon;
