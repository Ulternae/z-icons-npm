import React from 'react';

export interface LanMonitorHeartRateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonitorHeartRateThin: React.FC<LanMonitorHeartRateThinProps>;
export default LanMonitorHeartRateThin;
