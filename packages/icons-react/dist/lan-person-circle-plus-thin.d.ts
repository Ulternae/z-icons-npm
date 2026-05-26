import React from 'react';

export interface LanPersonCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCirclePlusThin: React.FC<LanPersonCirclePlusThinProps>;
export default LanPersonCirclePlusThin;
