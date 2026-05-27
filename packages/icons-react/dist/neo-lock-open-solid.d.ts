import React from 'react';

export interface NeoLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLockOpenSolid: React.FC<NeoLockOpenSolidProps>;
export default NeoLockOpenSolid;
