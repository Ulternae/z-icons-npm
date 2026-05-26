import React from 'react';

export interface LanImageStackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageStackSolid: React.FC<LanImageStackSolidProps>;
export default LanImageStackSolid;
