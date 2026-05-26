import React from 'react';

export interface LanCircleSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSortSolid: React.FC<LanCircleSortSolidProps>;
export default LanCircleSortSolid;
