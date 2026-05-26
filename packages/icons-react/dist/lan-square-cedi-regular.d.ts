import React from 'react';

export interface LanSquareCediRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCediRegular: React.FC<LanSquareCediRegularProps>;
export default LanSquareCediRegular;
