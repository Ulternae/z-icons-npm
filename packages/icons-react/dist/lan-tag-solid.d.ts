import React from 'react';

export interface LanTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTagSolid: React.FC<LanTagSolidProps>;
export default LanTagSolid;
