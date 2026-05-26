import React from 'react';

export interface LanEggSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggSolid: React.FC<LanEggSolidProps>;
export default LanEggSolid;
