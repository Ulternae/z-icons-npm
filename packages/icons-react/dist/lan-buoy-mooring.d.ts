import React from 'react';

export interface LanBuoyMooringProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoyMooring: React.FC<LanBuoyMooringProps>;
export default LanBuoyMooring;
