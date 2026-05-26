import React from 'react';

export interface LanKerningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKerningSolid: React.FC<LanKerningSolidProps>;
export default LanKerningSolid;
