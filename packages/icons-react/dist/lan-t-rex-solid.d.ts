import React from 'react';

export interface LanTRexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTRexSolid: React.FC<LanTRexSolidProps>;
export default LanTRexSolid;
