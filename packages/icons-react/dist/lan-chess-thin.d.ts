import React from 'react';

export interface LanChessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessThin: React.FC<LanChessThinProps>;
export default LanChessThin;
