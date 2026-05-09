import React from 'react';

export interface MinaLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockSolid: React.FC<MinaLockSolidProps>;
export default MinaLockSolid;
