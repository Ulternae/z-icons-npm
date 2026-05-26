import React from 'react';

export interface LanPipeSmokingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSmokingSolid: React.FC<LanPipeSmokingSolidProps>;
export default LanPipeSmokingSolid;
