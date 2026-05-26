import React from 'react';

export interface LanJarWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJarWheatSolid: React.FC<LanJarWheatSolidProps>;
export default LanJarWheatSolid;
