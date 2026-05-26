import React from 'react';

export interface LanLineHeightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineHeightSolid: React.FC<LanLineHeightSolidProps>;
export default LanLineHeightSolid;
