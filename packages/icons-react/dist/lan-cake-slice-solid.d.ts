import React from 'react';

export interface LanCakeSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeSliceSolid: React.FC<LanCakeSliceSolidProps>;
export default LanCakeSliceSolid;
