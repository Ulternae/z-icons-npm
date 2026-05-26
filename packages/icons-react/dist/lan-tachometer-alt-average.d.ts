import React from 'react';

export interface LanTachometerAltAverageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTachometerAltAverage: React.FC<LanTachometerAltAverageProps>;
export default LanTachometerAltAverage;
