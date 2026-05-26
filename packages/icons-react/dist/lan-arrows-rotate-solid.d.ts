import React from 'react';

export interface LanArrowsRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsRotateSolid: React.FC<LanArrowsRotateSolidProps>;
export default LanArrowsRotateSolid;
