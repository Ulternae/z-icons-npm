import React from 'react';

export interface LanBandAidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBandAidRegular: React.FC<LanBandAidRegularProps>;
export default LanBandAidRegular;
