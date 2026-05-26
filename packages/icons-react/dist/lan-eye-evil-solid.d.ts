import React from 'react';

export interface LanEyeEvilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeEvilSolid: React.FC<LanEyeEvilSolidProps>;
export default LanEyeEvilSolid;
