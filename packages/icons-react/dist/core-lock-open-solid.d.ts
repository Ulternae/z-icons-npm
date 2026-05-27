import React from 'react';

export interface CoreLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLockOpenSolid: React.FC<CoreLockOpenSolidProps>;
export default CoreLockOpenSolid;
