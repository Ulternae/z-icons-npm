import React from 'react';

export interface LanSparkleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparkleSolid: React.FC<LanSparkleSolidProps>;
export default LanSparkleSolid;
