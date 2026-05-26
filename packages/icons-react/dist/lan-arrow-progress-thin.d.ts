import React from 'react';

export interface LanArrowProgressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowProgressThin: React.FC<LanArrowProgressThinProps>;
export default LanArrowProgressThin;
