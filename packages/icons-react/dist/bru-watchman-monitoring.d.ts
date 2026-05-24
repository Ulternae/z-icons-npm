import React from 'react';

export interface BruWatchmanMonitoringProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWatchmanMonitoring: React.FC<BruWatchmanMonitoringProps>;
export default BruWatchmanMonitoring;
