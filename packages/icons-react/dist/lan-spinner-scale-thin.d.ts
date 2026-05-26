import React from 'react';

export interface LanSpinnerScaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerScaleThin: React.FC<LanSpinnerScaleThinProps>;
export default LanSpinnerScaleThin;
