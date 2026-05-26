import React from 'react';

export interface LanBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSolid: React.FC<LanBookSolidProps>;
export default LanBookSolid;
