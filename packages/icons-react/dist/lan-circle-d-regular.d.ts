import React from 'react';

export interface LanCircleDRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDRegular: React.FC<LanCircleDRegularProps>;
export default LanCircleDRegular;
