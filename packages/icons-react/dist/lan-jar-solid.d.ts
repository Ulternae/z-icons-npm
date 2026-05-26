import React from 'react';

export interface LanJarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJarSolid: React.FC<LanJarSolidProps>;
export default LanJarSolid;
