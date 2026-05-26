import React from 'react';

export interface LanMandolinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMandolinRegular: React.FC<LanMandolinRegularProps>;
export default LanMandolinRegular;
