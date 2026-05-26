import React from 'react';

export interface LanBackwardFastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardFastSolid: React.FC<LanBackwardFastSolidProps>;
export default LanBackwardFastSolid;
