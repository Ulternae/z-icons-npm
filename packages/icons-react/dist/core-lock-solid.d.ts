import React from 'react';

export interface CoreLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLockSolid: React.FC<CoreLockSolidProps>;
export default CoreLockSolid;
