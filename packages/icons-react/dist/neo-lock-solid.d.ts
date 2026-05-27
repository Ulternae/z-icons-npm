import React from 'react';

export interface NeoLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLockSolid: React.FC<NeoLockSolidProps>;
export default NeoLockSolid;
