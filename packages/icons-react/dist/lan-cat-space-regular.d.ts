import React from 'react';

export interface LanCatSpaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCatSpaceRegular: React.FC<LanCatSpaceRegularProps>;
export default LanCatSpaceRegular;
