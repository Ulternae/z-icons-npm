import React from 'react';

export interface LanTireFlatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireFlat: React.FC<LanTireFlatProps>;
export default LanTireFlat;
