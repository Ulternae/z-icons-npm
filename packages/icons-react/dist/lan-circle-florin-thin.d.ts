import React from 'react';

export interface LanCircleFlorinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleFlorinThin: React.FC<LanCircleFlorinThinProps>;
export default LanCircleFlorinThin;
