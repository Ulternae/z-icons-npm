import React from 'react';

export interface LanFileFragmentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileFragmentSolid: React.FC<LanFileFragmentSolidProps>;
export default LanFileFragmentSolid;
