import React from 'react';

export interface LanDresserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDresserSolid: React.FC<LanDresserSolidProps>;
export default LanDresserSolid;
