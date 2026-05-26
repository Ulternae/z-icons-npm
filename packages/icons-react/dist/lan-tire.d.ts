import React from 'react';

export interface LanTireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTire: React.FC<LanTireProps>;
export default LanTire;
