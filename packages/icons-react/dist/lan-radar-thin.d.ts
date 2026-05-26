import React from 'react';

export interface LanRadarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadarThin: React.FC<LanRadarThinProps>;
export default LanRadarThin;
