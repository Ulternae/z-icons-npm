import React from 'react';

export interface LanFileCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCirclePlusThin: React.FC<LanFileCirclePlusThinProps>;
export default LanFileCirclePlusThin;
