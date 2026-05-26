import React from 'react';

export interface LanTireRuggedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireRugged: React.FC<LanTireRuggedProps>;
export default LanTireRugged;
