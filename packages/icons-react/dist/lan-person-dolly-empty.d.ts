import React from 'react';

export interface LanPersonDollyEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDollyEmpty: React.FC<LanPersonDollyEmptyProps>;
export default LanPersonDollyEmpty;
