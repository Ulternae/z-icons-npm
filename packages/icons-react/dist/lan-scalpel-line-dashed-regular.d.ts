import React from 'react';

export interface LanScalpelLineDashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpelLineDashedRegular: React.FC<LanScalpelLineDashedRegularProps>;
export default LanScalpelLineDashedRegular;
