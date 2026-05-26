import React from 'react';

export interface LanWagonCoveredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWagonCoveredThin: React.FC<LanWagonCoveredThinProps>;
export default LanWagonCoveredThin;
