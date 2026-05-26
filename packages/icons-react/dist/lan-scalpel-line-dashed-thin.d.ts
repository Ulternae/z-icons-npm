import React from 'react';

export interface LanScalpelLineDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpelLineDashedThin: React.FC<LanScalpelLineDashedThinProps>;
export default LanScalpelLineDashedThin;
