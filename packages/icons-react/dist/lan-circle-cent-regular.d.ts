import React from 'react';

export interface LanCircleCentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCentRegular: React.FC<LanCircleCentRegularProps>;
export default LanCircleCentRegular;
