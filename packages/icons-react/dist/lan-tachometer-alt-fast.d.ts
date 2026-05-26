import React from 'react';

export interface LanTachometerAltFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTachometerAltFast: React.FC<LanTachometerAltFastProps>;
export default LanTachometerAltFast;
