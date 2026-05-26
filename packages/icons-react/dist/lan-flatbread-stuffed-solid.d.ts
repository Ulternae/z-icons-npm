import React from 'react';

export interface LanFlatbreadStuffedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlatbreadStuffedSolid: React.FC<LanFlatbreadStuffedSolidProps>;
export default LanFlatbreadStuffedSolid;
