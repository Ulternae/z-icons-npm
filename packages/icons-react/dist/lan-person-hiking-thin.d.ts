import React from 'react';

export interface LanPersonHikingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonHikingThin: React.FC<LanPersonHikingThinProps>;
export default LanPersonHikingThin;
