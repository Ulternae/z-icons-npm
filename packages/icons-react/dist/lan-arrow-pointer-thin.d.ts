import React from 'react';

export interface LanArrowPointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowPointerThin: React.FC<LanArrowPointerThinProps>;
export default LanArrowPointerThin;
