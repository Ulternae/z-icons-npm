import React from 'react';

export interface LanTvAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvAltSolid: React.FC<LanTvAltSolidProps>;
export default LanTvAltSolid;
