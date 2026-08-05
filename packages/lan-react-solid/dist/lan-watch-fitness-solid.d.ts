import React from 'react';

export interface LanWatchFitnessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchFitnessSolid(props: LanWatchFitnessSolidProps): React.ReactElement;
export default LanWatchFitnessSolid;
