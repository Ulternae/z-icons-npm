import React from 'react';

export interface LanGridVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridVerticalSolid: React.FC<LanGridVerticalSolidProps>;
export default LanGridVerticalSolid;
