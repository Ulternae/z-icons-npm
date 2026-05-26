import React from 'react';

export interface LanCircleCediRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCediRegular: React.FC<LanCircleCediRegularProps>;
export default LanCircleCediRegular;
