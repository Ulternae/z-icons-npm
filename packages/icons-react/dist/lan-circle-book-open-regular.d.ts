import React from 'react';

export interface LanCircleBookOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBookOpenRegular: React.FC<LanCircleBookOpenRegularProps>;
export default LanCircleBookOpenRegular;
