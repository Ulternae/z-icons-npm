import React from 'react';

export interface LanCompactDiscRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompactDiscRegular: React.FC<LanCompactDiscRegularProps>;
export default LanCompactDiscRegular;
