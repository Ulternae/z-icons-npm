import React from 'react';

export interface LanFileCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCodeSolid: React.FC<LanFileCodeSolidProps>;
export default LanFileCodeSolid;
