import React from 'react';

export interface LanArrowsCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsCrossSolid: React.FC<LanArrowsCrossSolidProps>;
export default LanArrowsCrossSolid;
