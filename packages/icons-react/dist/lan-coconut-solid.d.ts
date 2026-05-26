import React from 'react';

export interface LanCoconutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoconutSolid: React.FC<LanCoconutSolidProps>;
export default LanCoconutSolid;
