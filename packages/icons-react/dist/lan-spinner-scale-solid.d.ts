import React from 'react';

export interface LanSpinnerScaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerScaleSolid: React.FC<LanSpinnerScaleSolidProps>;
export default LanSpinnerScaleSolid;
