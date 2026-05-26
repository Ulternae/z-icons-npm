import React from 'react';

export interface LanNotdefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotdefSolid: React.FC<LanNotdefSolidProps>;
export default LanNotdefSolid;
