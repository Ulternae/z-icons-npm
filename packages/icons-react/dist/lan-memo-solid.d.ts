import React from 'react';

export interface LanMemoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoSolid: React.FC<LanMemoSolidProps>;
export default LanMemoSolid;
