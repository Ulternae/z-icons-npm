import React from 'react';

export interface LanCircleEuroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEuro: React.FC<LanCircleEuroProps>;
export default LanCircleEuro;
