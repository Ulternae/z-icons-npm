import React from 'react';

export interface LanWagonCoveredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWagonCovered: React.FC<LanWagonCoveredProps>;
export default LanWagonCovered;
