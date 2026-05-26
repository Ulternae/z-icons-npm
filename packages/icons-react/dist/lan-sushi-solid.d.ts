import React from 'react';

export interface LanSushiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSushiSolid: React.FC<LanSushiSolidProps>;
export default LanSushiSolid;
