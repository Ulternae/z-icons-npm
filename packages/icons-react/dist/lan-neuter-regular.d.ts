import React from 'react';

export interface LanNeuterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNeuterRegular: React.FC<LanNeuterRegularProps>;
export default LanNeuterRegular;
