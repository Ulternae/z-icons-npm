import React from 'react';

export interface LanAriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAriesThin: React.FC<LanAriesThinProps>;
export default LanAriesThin;
