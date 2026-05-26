import React from 'react';

export interface LanCartPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartPlusSolid: React.FC<LanCartPlusSolidProps>;
export default LanCartPlusSolid;
