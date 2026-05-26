import React from 'react';

export interface LanRhombusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRhombusRegular: React.FC<LanRhombusRegularProps>;
export default LanRhombusRegular;
