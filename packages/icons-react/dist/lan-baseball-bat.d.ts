import React from 'react';

export interface LanBaseballBatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBat: React.FC<LanBaseballBatProps>;
export default LanBaseballBat;
