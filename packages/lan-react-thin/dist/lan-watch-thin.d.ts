import React from 'react';

export interface LanWatchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchThin(props: LanWatchThinProps): React.ReactElement;
export default LanWatchThin;
