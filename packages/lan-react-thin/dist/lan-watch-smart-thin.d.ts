import React from 'react';

export interface LanWatchSmartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchSmartThin(props: LanWatchSmartThinProps): React.ReactElement;
export default LanWatchSmartThin;
