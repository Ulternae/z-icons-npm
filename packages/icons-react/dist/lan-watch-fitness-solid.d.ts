import React from 'react';

export interface LanWatchFitnessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchFitnessSolid: React.FC<LanWatchFitnessSolidProps>;
export default LanWatchFitnessSolid;
