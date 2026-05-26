import React from 'react';

export interface LanPersonDollyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDolly: React.FC<LanPersonDollyProps>;
export default LanPersonDolly;
