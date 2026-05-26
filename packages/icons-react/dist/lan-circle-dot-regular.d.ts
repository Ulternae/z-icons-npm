import React from 'react';

export interface LanCircleDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDotRegular: React.FC<LanCircleDotRegularProps>;
export default LanCircleDotRegular;
