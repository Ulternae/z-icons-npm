import React from 'react';

export interface LanLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafSolid: React.FC<LanLeafSolidProps>;
export default LanLeafSolid;
