import React from 'react';

export interface LanWatchSmartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchSmart(props: LanWatchSmartProps): React.ReactElement;
export default LanWatchSmart;
