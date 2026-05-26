import React from 'react';

export interface LanHundredPointsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHundredPointsThin: React.FC<LanHundredPointsThinProps>;
export default LanHundredPointsThin;
