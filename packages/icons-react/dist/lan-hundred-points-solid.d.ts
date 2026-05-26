import React from 'react';

export interface LanHundredPointsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHundredPointsSolid: React.FC<LanHundredPointsSolidProps>;
export default LanHundredPointsSolid;
