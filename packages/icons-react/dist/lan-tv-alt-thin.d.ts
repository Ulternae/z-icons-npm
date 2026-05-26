import React from 'react';

export interface LanTvAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvAltThin: React.FC<LanTvAltThinProps>;
export default LanTvAltThin;
