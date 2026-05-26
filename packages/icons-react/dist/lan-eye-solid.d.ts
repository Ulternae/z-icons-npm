import React from 'react';

export interface LanEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeSolid: React.FC<LanEyeSolidProps>;
export default LanEyeSolid;
