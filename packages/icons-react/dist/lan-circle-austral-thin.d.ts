import React from 'react';

export interface LanCircleAustralThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAustralThin: React.FC<LanCircleAustralThinProps>;
export default LanCircleAustralThin;
