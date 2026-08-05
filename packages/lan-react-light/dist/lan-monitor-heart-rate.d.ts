import React from 'react';

export interface LanMonitorHeartRateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonitorHeartRate(props: LanMonitorHeartRateProps): React.ReactElement;
export default LanMonitorHeartRate;
