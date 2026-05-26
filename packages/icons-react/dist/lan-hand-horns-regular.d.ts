import React from 'react';

export interface LanHandHornsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHornsRegular: React.FC<LanHandHornsRegularProps>;
export default LanHandHornsRegular;
