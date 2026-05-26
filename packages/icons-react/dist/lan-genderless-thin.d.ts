import React from 'react';

export interface LanGenderlessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGenderlessThin: React.FC<LanGenderlessThinProps>;
export default LanGenderlessThin;
