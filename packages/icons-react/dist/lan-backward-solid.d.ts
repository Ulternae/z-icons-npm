import React from 'react';

export interface LanBackwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardSolid: React.FC<LanBackwardSolidProps>;
export default LanBackwardSolid;
