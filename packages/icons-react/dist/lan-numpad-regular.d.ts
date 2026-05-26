import React from 'react';

export interface LanNumpadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNumpadRegular: React.FC<LanNumpadRegularProps>;
export default LanNumpadRegular;
