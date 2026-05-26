import React from 'react';

export interface LanRhombusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRhombusThin: React.FC<LanRhombusThinProps>;
export default LanRhombusThin;
