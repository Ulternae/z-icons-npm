import React from 'react';

export interface LanPhoneSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSquareSolid: React.FC<LanPhoneSquareSolidProps>;
export default LanPhoneSquareSolid;
