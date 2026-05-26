import React from 'react';

export interface LanArrowArcheryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowArcheryThin: React.FC<LanArrowArcheryThinProps>;
export default LanArrowArcheryThin;
