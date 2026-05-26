import React from 'react';

export interface LanSneakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneakerSolid: React.FC<LanSneakerSolidProps>;
export default LanSneakerSolid;
