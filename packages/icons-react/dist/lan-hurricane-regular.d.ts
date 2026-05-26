import React from 'react';

export interface LanHurricaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHurricaneRegular: React.FC<LanHurricaneRegularProps>;
export default LanHurricaneRegular;
