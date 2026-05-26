import React from 'react';

export interface LanLoaderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLoaderSolid: React.FC<LanLoaderSolidProps>;
export default LanLoaderSolid;
