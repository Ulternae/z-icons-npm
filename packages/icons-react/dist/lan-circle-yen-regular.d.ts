import React from 'react';

export interface LanCircleYenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleYenRegular: React.FC<LanCircleYenRegularProps>;
export default LanCircleYenRegular;
