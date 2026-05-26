import React from 'react';

export interface LanHorseshoeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseshoeSolid: React.FC<LanHorseshoeSolidProps>;
export default LanHorseshoeSolid;
