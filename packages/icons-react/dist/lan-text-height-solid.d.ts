import React from 'react';

export interface LanTextHeightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextHeightSolid: React.FC<LanTextHeightSolidProps>;
export default LanTextHeightSolid;
