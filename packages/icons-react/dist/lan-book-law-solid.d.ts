import React from 'react';

export interface LanBookLawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookLawSolid: React.FC<LanBookLawSolidProps>;
export default LanBookLawSolid;
