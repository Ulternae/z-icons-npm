import React from 'react';

export interface LanCoffinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffinRegular: React.FC<LanCoffinRegularProps>;
export default LanCoffinRegular;
