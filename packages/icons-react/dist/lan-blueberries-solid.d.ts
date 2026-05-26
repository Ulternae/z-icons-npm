import React from 'react';

export interface LanBlueberriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlueberriesSolid: React.FC<LanBlueberriesSolidProps>;
export default LanBlueberriesSolid;
