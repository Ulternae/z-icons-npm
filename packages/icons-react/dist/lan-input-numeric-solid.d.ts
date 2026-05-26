import React from 'react';

export interface LanInputNumericSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputNumericSolid: React.FC<LanInputNumericSolidProps>;
export default LanInputNumericSolid;
