import React from 'react';

export interface LanWatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchSolid: React.FC<LanWatchSolidProps>;
export default LanWatchSolid;
