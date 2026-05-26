import React from 'react';

export interface LanToiletsPortableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletsPortableSolid: React.FC<LanToiletsPortableSolidProps>;
export default LanToiletsPortableSolid;
