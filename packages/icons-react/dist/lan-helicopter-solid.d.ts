import React from 'react';

export interface LanHelicopterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopterSolid: React.FC<LanHelicopterSolidProps>;
export default LanHelicopterSolid;
