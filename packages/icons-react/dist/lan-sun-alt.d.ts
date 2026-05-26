import React from 'react';

export interface LanSunAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunAlt: React.FC<LanSunAltProps>;
export default LanSunAlt;
