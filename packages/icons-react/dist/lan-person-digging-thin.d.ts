import React from 'react';

export interface LanPersonDiggingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDiggingThin: React.FC<LanPersonDiggingThinProps>;
export default LanPersonDiggingThin;
