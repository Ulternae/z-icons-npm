import React from 'react';

export interface LanBatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatSolid: React.FC<LanBatSolidProps>;
export default LanBatSolid;
