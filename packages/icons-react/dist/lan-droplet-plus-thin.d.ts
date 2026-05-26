import React from 'react';

export interface LanDropletPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPlusThin: React.FC<LanDropletPlusThinProps>;
export default LanDropletPlusThin;
