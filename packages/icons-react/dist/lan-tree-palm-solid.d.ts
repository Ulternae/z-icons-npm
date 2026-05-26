import React from 'react';

export interface LanTreePalmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreePalmSolid: React.FC<LanTreePalmSolidProps>;
export default LanTreePalmSolid;
