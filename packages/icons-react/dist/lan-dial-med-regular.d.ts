import React from 'react';

export interface LanDialMedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedRegular: React.FC<LanDialMedRegularProps>;
export default LanDialMedRegular;
