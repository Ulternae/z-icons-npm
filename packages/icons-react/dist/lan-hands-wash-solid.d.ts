import React from 'react';

export interface LanHandsWashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsWashSolid: React.FC<LanHandsWashSolidProps>;
export default LanHandsWashSolid;
