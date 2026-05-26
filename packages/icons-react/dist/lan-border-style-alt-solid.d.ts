import React from 'react';

export interface LanBorderStyleAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderStyleAltSolid: React.FC<LanBorderStyleAltSolidProps>;
export default LanBorderStyleAltSolid;
