import React from 'react';

export interface LanChfSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChfSignSolid: React.FC<LanChfSignSolidProps>;
export default LanChfSignSolid;
