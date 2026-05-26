import React from 'react';

export interface LanFileIcnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileIcnsSolid: React.FC<LanFileIcnsSolidProps>;
export default LanFileIcnsSolid;
