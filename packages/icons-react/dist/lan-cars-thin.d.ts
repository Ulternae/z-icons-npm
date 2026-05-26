import React from 'react';

export interface LanCarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarsThin: React.FC<LanCarsThinProps>;
export default LanCarsThin;
