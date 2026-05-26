import React from 'react';

export interface LanUnderlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnderlineSolid: React.FC<LanUnderlineSolidProps>;
export default LanUnderlineSolid;
