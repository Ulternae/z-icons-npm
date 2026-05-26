import React from 'react';

export interface LanUserHairLongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHairLong: React.FC<LanUserHairLongProps>;
export default LanUserHairLong;
