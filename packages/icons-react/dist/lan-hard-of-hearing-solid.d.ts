import React from 'react';

export interface LanHardOfHearingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardOfHearingSolid: React.FC<LanHardOfHearingSolidProps>;
export default LanHardOfHearingSolid;
