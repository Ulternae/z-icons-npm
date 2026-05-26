import React from 'react';

export interface LanMangoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMangoSolid: React.FC<LanMangoSolidProps>;
export default LanMangoSolid;
