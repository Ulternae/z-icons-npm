import React from 'react';

export interface LanMillSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMillSignRegular: React.FC<LanMillSignRegularProps>;
export default LanMillSignRegular;
