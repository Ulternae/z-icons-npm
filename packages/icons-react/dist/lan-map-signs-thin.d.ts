import React from 'react';

export interface LanMapSignsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapSignsThin: React.FC<LanMapSignsThinProps>;
export default LanMapSignsThin;
