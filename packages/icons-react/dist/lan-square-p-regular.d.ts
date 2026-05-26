import React from 'react';

export interface LanSquarePRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePRegular: React.FC<LanSquarePRegularProps>;
export default LanSquarePRegular;
