import React from 'react';

export interface LanMobileScreenButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileScreenButtonSolid: React.FC<LanMobileScreenButtonSolidProps>;
export default LanMobileScreenButtonSolid;
