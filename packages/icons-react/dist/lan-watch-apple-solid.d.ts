import React from 'react';

export interface LanWatchAppleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchAppleSolid: React.FC<LanWatchAppleSolidProps>;
export default LanWatchAppleSolid;
