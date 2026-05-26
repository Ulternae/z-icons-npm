import React from 'react';

export interface LanWagonCoveredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWagonCoveredRegular: React.FC<LanWagonCoveredRegularProps>;
export default LanWagonCoveredRegular;
