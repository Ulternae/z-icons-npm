import React from 'react';

export interface LanListRadioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListRadioRegular: React.FC<LanListRadioRegularProps>;
export default LanListRadioRegular;
