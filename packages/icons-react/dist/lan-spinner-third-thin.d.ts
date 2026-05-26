import React from 'react';

export interface LanSpinnerThirdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerThirdThin: React.FC<LanSpinnerThirdThinProps>;
export default LanSpinnerThirdThin;
