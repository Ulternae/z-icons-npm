import React from 'react';

export interface LanPersonThroughWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonThroughWindowThin: React.FC<LanPersonThroughWindowThinProps>;
export default LanPersonThroughWindowThin;
