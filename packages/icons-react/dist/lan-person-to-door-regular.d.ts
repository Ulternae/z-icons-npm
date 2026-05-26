import React from 'react';

export interface LanPersonToDoorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonToDoorRegular: React.FC<LanPersonToDoorRegularProps>;
export default LanPersonToDoorRegular;
