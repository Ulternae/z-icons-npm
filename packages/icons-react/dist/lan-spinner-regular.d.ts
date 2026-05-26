import React from 'react';

export interface LanSpinnerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerRegular: React.FC<LanSpinnerRegularProps>;
export default LanSpinnerRegular;
