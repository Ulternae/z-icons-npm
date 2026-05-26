import React from 'react';

export interface LanTabletsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletsSolid: React.FC<LanTabletsSolidProps>;
export default LanTabletsSolid;
