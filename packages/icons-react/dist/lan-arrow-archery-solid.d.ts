import React from 'react';

export interface LanArrowArcherySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowArcherySolid: React.FC<LanArrowArcherySolidProps>;
export default LanArrowArcherySolid;
