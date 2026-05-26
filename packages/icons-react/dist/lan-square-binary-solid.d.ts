import React from 'react';

export interface LanSquareBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBinarySolid: React.FC<LanSquareBinarySolidProps>;
export default LanSquareBinarySolid;
