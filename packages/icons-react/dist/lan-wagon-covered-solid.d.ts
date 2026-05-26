import React from 'react';

export interface LanWagonCoveredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWagonCoveredSolid: React.FC<LanWagonCoveredSolidProps>;
export default LanWagonCoveredSolid;
