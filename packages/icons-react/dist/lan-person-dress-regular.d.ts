import React from 'react';

export interface LanPersonDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressRegular: React.FC<LanPersonDressRegularProps>;
export default LanPersonDressRegular;
