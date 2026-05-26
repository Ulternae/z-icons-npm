import React from 'react';

export interface LanYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYSolid: React.FC<LanYSolidProps>;
export default LanYSolid;
