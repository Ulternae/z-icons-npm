import React from 'react';

export interface LanCarBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBoltRegular: React.FC<LanCarBoltRegularProps>;
export default LanCarBoltRegular;
