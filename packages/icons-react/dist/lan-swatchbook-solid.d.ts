import React from 'react';

export interface LanSwatchbookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwatchbookSolid: React.FC<LanSwatchbookSolidProps>;
export default LanSwatchbookSolid;
