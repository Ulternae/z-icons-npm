import React from 'react';

export interface LanCarWashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarWashSolid: React.FC<LanCarWashSolidProps>;
export default LanCarWashSolid;
