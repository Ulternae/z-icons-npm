import React from 'react';

export interface LanListRadioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListRadioThin: React.FC<LanListRadioThinProps>;
export default LanListRadioThin;
