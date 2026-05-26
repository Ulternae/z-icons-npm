import React from 'react';

export interface LanFiltersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFiltersSolid: React.FC<LanFiltersSolidProps>;
export default LanFiltersSolid;
