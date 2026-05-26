import React from 'react';

export interface LanShelvesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelvesSolid: React.FC<LanShelvesSolidProps>;
export default LanShelvesSolid;
