import React from 'react';

export interface LanFootWingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootWingSolid: React.FC<LanFootWingSolidProps>;
export default LanFootWingSolid;
