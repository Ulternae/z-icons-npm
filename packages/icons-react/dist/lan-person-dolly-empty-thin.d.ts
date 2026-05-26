import React from 'react';

export interface LanPersonDollyEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDollyEmptyThin: React.FC<LanPersonDollyEmptyThinProps>;
export default LanPersonDollyEmptyThin;
