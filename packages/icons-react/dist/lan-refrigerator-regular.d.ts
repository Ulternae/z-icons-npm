import React from 'react';

export interface LanRefrigeratorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRefrigeratorRegular: React.FC<LanRefrigeratorRegularProps>;
export default LanRefrigeratorRegular;
