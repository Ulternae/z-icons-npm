import React from 'react';

export interface LanSquareSterlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSterlingSolid: React.FC<LanSquareSterlingSolidProps>;
export default LanSquareSterlingSolid;
