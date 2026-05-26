import React from 'react';

export interface LanAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtSolid: React.FC<LanAtSolidProps>;
export default LanAtSolid;
