import React from 'react';

export interface LanBandAidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBandAid: React.FC<LanBandAidProps>;
export default LanBandAid;
