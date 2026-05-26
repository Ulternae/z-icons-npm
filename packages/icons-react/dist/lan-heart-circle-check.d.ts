import React from 'react';

export interface LanHeartCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleCheck: React.FC<LanHeartCircleCheckProps>;
export default LanHeartCircleCheck;
