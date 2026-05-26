import React from 'react';

export interface LanBatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBat: React.FC<LanBatProps>;
export default LanBat;
