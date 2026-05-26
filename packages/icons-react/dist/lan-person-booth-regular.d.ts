import React from 'react';

export interface LanPersonBoothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBoothRegular: React.FC<LanPersonBoothRegularProps>;
export default LanPersonBoothRegular;
