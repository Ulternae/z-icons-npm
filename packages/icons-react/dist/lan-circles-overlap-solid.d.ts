import React from 'react';

export interface LanCirclesOverlapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclesOverlapSolid: React.FC<LanCirclesOverlapSolidProps>;
export default LanCirclesOverlapSolid;
