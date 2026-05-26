import React from 'react';

export interface LanPersonBikingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBikingThin: React.FC<LanPersonBikingThinProps>;
export default LanPersonBikingThin;
