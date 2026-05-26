import React from 'react';

export interface LanOarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOarsThin: React.FC<LanOarsThinProps>;
export default LanOarsThin;
