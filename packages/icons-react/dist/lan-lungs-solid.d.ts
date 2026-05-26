import React from 'react';

export interface LanLungsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLungsSolid: React.FC<LanLungsSolidProps>;
export default LanLungsSolid;
