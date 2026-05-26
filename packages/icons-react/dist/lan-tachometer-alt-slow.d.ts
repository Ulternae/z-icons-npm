import React from 'react';

export interface LanTachometerAltSlowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTachometerAltSlow: React.FC<LanTachometerAltSlowProps>;
export default LanTachometerAltSlow;
