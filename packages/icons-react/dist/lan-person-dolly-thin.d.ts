import React from 'react';

export interface LanPersonDollyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDollyThin: React.FC<LanPersonDollyThinProps>;
export default LanPersonDollyThin;
