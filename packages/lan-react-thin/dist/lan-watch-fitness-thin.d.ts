import React from 'react';

export interface LanWatchFitnessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchFitnessThin(props: LanWatchFitnessThinProps): React.ReactElement;
export default LanWatchFitnessThin;
