import React from 'react';

export interface BruWatchmanMonitoringProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWatchmanMonitoring(props: BruWatchmanMonitoringProps): React.ReactElement;
export default BruWatchmanMonitoring;
