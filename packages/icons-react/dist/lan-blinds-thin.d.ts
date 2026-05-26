import React from 'react';

export interface LanBlindsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsThin: React.FC<LanBlindsThinProps>;
export default LanBlindsThin;
