import React from 'react';

export interface LanCherriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCherriesSolid: React.FC<LanCherriesSolidProps>;
export default LanCherriesSolid;
