import React from 'react';

export interface LanCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitySolid: React.FC<LanCitySolidProps>;
export default LanCitySolid;
