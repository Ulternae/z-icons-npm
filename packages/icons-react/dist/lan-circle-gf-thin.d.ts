import React from 'react';

export interface LanCircleGfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGfThin: React.FC<LanCircleGfThinProps>;
export default LanCircleGfThin;
