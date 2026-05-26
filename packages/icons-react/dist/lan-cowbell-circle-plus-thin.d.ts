import React from 'react';

export interface LanCowbellCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbellCirclePlusThin: React.FC<LanCowbellCirclePlusThinProps>;
export default LanCowbellCirclePlusThin;
