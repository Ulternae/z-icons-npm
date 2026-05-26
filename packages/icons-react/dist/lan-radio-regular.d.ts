import React from 'react';

export interface LanRadioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadioRegular: React.FC<LanRadioRegularProps>;
export default LanRadioRegular;
