import React from 'react';

export interface LanKiwiBirdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiwiBirdRegular: React.FC<LanKiwiBirdRegularProps>;
export default LanKiwiBirdRegular;
