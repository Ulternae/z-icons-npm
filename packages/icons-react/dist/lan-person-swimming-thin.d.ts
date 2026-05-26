import React from 'react';

export interface LanPersonSwimmingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingThin: React.FC<LanPersonSwimmingThinProps>;
export default LanPersonSwimmingThin;
