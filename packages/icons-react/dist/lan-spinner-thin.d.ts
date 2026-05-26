import React from 'react';

export interface LanSpinnerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerThin: React.FC<LanSpinnerThinProps>;
export default LanSpinnerThin;
