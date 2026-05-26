import React from 'react';

export interface LanSpinnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinner: React.FC<LanSpinnerProps>;
export default LanSpinner;
