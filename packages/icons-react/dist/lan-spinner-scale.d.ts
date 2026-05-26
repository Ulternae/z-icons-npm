import React from 'react';

export interface LanSpinnerScaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerScale: React.FC<LanSpinnerScaleProps>;
export default LanSpinnerScale;
