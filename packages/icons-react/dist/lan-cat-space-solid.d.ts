import React from 'react';

export interface LanCatSpaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCatSpaceSolid: React.FC<LanCatSpaceSolidProps>;
export default LanCatSpaceSolid;
