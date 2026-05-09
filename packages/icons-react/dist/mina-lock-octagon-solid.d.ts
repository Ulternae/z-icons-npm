import React from 'react';

export interface MinaLockOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockOctagonSolid: React.FC<MinaLockOctagonSolidProps>;
export default MinaLockOctagonSolid;
