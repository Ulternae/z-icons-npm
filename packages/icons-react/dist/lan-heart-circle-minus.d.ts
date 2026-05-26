import React from 'react';

export interface LanHeartCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleMinus: React.FC<LanHeartCircleMinusProps>;
export default LanHeartCircleMinus;
