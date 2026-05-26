import React from 'react';

export interface LanArrowLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowLeftThin: React.FC<LanArrowLeftThinProps>;
export default LanArrowLeftThin;
