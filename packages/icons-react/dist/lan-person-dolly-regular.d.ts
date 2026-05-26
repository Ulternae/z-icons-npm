import React from 'react';

export interface LanPersonDollyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDollyRegular: React.FC<LanPersonDollyRegularProps>;
export default LanPersonDollyRegular;
