import React from 'react';

export interface LanSquareCentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCentRegular: React.FC<LanSquareCentRegularProps>;
export default LanSquareCentRegular;
