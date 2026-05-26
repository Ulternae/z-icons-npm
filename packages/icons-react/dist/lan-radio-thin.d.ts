import React from 'react';

export interface LanRadioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadioThin: React.FC<LanRadioThinProps>;
export default LanRadioThin;
