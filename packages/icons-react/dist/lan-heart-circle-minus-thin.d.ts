import React from 'react';

export interface LanHeartCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleMinusThin: React.FC<LanHeartCircleMinusThinProps>;
export default LanHeartCircleMinusThin;
