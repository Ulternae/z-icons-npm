import React from 'react';

export interface LanGalaxySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGalaxySolid: React.FC<LanGalaxySolidProps>;
export default LanGalaxySolid;
