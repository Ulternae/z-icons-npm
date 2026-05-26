import React from 'react';

export interface LanPersonPinballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPinballRegular: React.FC<LanPersonPinballRegularProps>;
export default LanPersonPinballRegular;
