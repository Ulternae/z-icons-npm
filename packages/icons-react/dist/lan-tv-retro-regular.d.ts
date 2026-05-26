import React from 'react';

export interface LanTvRetroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvRetroRegular: React.FC<LanTvRetroRegularProps>;
export default LanTvRetroRegular;
