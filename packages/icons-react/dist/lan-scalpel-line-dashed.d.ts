import React from 'react';

export interface LanScalpelLineDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpelLineDashed: React.FC<LanScalpelLineDashedProps>;
export default LanScalpelLineDashed;
