import React from 'react';

export interface LanInputNumericRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputNumericRegular: React.FC<LanInputNumericRegularProps>;
export default LanInputNumericRegular;
