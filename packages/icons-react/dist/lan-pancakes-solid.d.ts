import React from 'react';

export interface LanPancakesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPancakesSolid: React.FC<LanPancakesSolidProps>;
export default LanPancakesSolid;
