import React from 'react';

export interface LanMonitorHeartRateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonitorHeartRateRegular: React.FC<LanMonitorHeartRateRegularProps>;
export default LanMonitorHeartRateRegular;
