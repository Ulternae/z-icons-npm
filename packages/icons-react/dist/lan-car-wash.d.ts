import React from 'react';

export interface LanCarWashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarWash: React.FC<LanCarWashProps>;
export default LanCarWash;
