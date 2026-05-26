import React from 'react';

export interface LanSkullCrossbonesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullCrossbonesThin: React.FC<LanSkullCrossbonesThinProps>;
export default LanSkullCrossbonesThin;
