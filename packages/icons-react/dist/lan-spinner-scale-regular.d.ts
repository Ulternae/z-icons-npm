import React from 'react';

export interface LanSpinnerScaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerScaleRegular: React.FC<LanSpinnerScaleRegularProps>;
export default LanSpinnerScaleRegular;
