import React from 'react';

export interface LanSpiderWebSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderWebSolid: React.FC<LanSpiderWebSolidProps>;
export default LanSpiderWebSolid;
