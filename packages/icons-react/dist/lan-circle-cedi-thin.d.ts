import React from 'react';

export interface LanCircleCediThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCediThin: React.FC<LanCircleCediThinProps>;
export default LanCircleCediThin;
