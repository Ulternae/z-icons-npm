import React from 'react';

export interface LanImageCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCirclePlusThin: React.FC<LanImageCirclePlusThinProps>;
export default LanImageCirclePlusThin;
