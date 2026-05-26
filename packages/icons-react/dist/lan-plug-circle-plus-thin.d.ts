import React from 'react';

export interface LanPlugCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCirclePlusThin: React.FC<LanPlugCirclePlusThinProps>;
export default LanPlugCirclePlusThin;
