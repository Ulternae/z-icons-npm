import React from 'react';

export interface LanPoliceBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoliceBoxSolid: React.FC<LanPoliceBoxSolidProps>;
export default LanPoliceBoxSolid;
