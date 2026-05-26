import React from 'react';

export interface LanMonitorHeartRateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonitorHeartRate: React.FC<LanMonitorHeartRateProps>;
export default LanMonitorHeartRate;
