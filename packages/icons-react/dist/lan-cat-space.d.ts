import React from 'react';

export interface LanCatSpaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCatSpace: React.FC<LanCatSpaceProps>;
export default LanCatSpace;
