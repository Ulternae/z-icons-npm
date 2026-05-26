import React from 'react';

export interface LanTvRetroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvRetroThin: React.FC<LanTvRetroThinProps>;
export default LanTvRetroThin;
