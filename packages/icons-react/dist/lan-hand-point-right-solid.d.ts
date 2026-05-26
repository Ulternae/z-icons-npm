import React from 'react';

export interface LanHandPointRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRightSolid: React.FC<LanHandPointRightSolidProps>;
export default LanHandPointRightSolid;
