import React from 'react';

export interface LanSignatureLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureLockSolid: React.FC<LanSignatureLockSolidProps>;
export default LanSignatureLockSolid;
