import React from 'react';

export interface LanArrowsToDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToDotSolid: React.FC<LanArrowsToDotSolidProps>;
export default LanArrowsToDotSolid;
