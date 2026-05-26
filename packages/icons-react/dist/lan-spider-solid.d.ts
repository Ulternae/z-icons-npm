import React from 'react';

export interface LanSpiderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderSolid: React.FC<LanSpiderSolidProps>;
export default LanSpiderSolid;
