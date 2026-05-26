import React from 'react';

export interface LanCircleAmpersandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAmpersandThin: React.FC<LanCircleAmpersandThinProps>;
export default LanCircleAmpersandThin;
