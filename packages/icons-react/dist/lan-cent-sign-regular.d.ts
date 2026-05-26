import React from 'react';

export interface LanCentSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCentSignRegular: React.FC<LanCentSignRegularProps>;
export default LanCentSignRegular;
