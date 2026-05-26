import React from 'react';

export interface LanRaindropsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaindropsThin: React.FC<LanRaindropsThinProps>;
export default LanRaindropsThin;
