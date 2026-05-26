import React from 'react';

export interface LanBaseballBatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBatSolid: React.FC<LanBaseballBatSolidProps>;
export default LanBaseballBatSolid;
