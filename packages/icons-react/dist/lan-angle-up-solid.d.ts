import React from 'react';

export interface LanAngleUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleUpSolid: React.FC<LanAngleUpSolidProps>;
export default LanAngleUpSolid;
