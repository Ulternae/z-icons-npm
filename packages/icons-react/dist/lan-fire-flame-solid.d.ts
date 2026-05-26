import React from 'react';

export interface LanFireFlameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameSolid: React.FC<LanFireFlameSolidProps>;
export default LanFireFlameSolid;
