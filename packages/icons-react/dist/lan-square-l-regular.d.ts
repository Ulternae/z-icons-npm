import React from 'react';

export interface LanSquareLRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLRegular: React.FC<LanSquareLRegularProps>;
export default LanSquareLRegular;
