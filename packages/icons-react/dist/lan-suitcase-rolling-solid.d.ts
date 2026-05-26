import React from 'react';

export interface LanSuitcaseRollingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseRollingSolid: React.FC<LanSuitcaseRollingSolidProps>;
export default LanSuitcaseRollingSolid;
