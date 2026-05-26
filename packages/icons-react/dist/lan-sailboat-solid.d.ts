import React from 'react';

export interface LanSailboatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSailboatSolid: React.FC<LanSailboatSolidProps>;
export default LanSailboatSolid;
