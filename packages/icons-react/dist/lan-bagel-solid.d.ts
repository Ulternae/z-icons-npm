import React from 'react';

export interface LanBagelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagelSolid: React.FC<LanBagelSolidProps>;
export default LanBagelSolid;
