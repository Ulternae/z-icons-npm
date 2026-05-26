import React from 'react';

export interface LanInputNumericProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputNumeric: React.FC<LanInputNumericProps>;
export default LanInputNumeric;
