import React from 'react';

export interface LanTachometerAltAverageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTachometerAltAverage(props: LanTachometerAltAverageProps): React.ReactElement;
export default LanTachometerAltAverage;
