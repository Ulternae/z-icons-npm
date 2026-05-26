import React from 'react';

export interface LanChildRifleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildRifleSolid: React.FC<LanChildRifleSolidProps>;
export default LanChildRifleSolid;
