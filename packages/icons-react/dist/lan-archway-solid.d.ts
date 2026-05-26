import React from 'react';

export interface LanArchwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArchwaySolid: React.FC<LanArchwaySolidProps>;
export default LanArchwaySolid;
