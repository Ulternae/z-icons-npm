import React from 'react';

export interface LanBandAidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBandAidSolid: React.FC<LanBandAidSolidProps>;
export default LanBandAidSolid;
