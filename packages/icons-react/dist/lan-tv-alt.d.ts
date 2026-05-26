import React from 'react';

export interface LanTvAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvAlt: React.FC<LanTvAltProps>;
export default LanTvAlt;
