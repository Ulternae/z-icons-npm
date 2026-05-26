import React from 'react';

export interface LanHeartCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCirclePlusThin: React.FC<LanHeartCirclePlusThinProps>;
export default LanHeartCirclePlusThin;
