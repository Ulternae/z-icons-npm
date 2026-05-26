import React from 'react';

export interface LanCarBusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBusThin: React.FC<LanCarBusThinProps>;
export default LanCarBusThin;
