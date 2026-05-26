import React from 'react';

export interface LanGuitarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarsThin: React.FC<LanGuitarsThinProps>;
export default LanGuitarsThin;
