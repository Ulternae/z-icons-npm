import React from 'react';

export interface CoreUnlockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUnlockSolid: React.FC<CoreUnlockSolidProps>;
export default CoreUnlockSolid;
