import React from 'react';

export interface LanBottleBabySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleBabySolid: React.FC<LanBottleBabySolidProps>;
export default LanBottleBabySolid;
