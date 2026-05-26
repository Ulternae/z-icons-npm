import React from 'react';

export interface LanHotTubPersonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotTubPersonThin: React.FC<LanHotTubPersonThinProps>;
export default LanHotTubPersonThin;
