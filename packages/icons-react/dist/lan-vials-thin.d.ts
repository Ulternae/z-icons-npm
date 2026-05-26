import React from 'react';

export interface LanVialsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialsThin: React.FC<LanVialsThinProps>;
export default LanVialsThin;
