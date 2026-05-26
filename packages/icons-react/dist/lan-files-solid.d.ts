import React from 'react';

export interface LanFilesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilesSolid: React.FC<LanFilesSolidProps>;
export default LanFilesSolid;
