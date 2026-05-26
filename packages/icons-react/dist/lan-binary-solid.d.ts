import React from 'react';

export interface LanBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinarySolid: React.FC<LanBinarySolidProps>;
export default LanBinarySolid;
