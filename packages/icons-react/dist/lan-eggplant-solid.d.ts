import React from 'react';

export interface LanEggplantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggplantSolid: React.FC<LanEggplantSolidProps>;
export default LanEggplantSolid;
