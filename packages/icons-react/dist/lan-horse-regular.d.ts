import React from 'react';

export interface LanHorseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseRegular: React.FC<LanHorseRegularProps>;
export default LanHorseRegular;
