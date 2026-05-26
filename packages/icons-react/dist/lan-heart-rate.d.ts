import React from 'react';

export interface LanHeartRateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartRate: React.FC<LanHeartRateProps>;
export default LanHeartRate;
