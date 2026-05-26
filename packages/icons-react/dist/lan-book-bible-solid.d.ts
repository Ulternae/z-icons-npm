import React from 'react';

export interface LanBookBibleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBibleSolid: React.FC<LanBookBibleSolidProps>;
export default LanBookBibleSolid;
