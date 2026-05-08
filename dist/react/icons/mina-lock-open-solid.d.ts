import React from 'react';

export interface MinaLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockOpenSolid: React.FC<MinaLockOpenSolidProps>;
export default MinaLockOpenSolid;
