import React from 'react';

export interface LanScalpelLineDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpelLineDashedSolid: React.FC<LanScalpelLineDashedSolidProps>;
export default LanScalpelLineDashedSolid;
