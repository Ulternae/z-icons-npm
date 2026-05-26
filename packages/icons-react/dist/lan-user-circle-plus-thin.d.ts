import React from 'react';

export interface LanUserCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCirclePlusThin: React.FC<LanUserCirclePlusThinProps>;
export default LanUserCirclePlusThin;
