import React from 'react';

export interface LanNonBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNonBinarySolid: React.FC<LanNonBinarySolidProps>;
export default LanNonBinarySolid;
