import React from 'react';

export interface LanPersonSkiingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkiingThin: React.FC<LanPersonSkiingThinProps>;
export default LanPersonSkiingThin;
