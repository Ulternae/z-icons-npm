import React from 'react';

export interface LanCircleOThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleOThin: React.FC<LanCircleOThinProps>;
export default LanCircleOThin;
