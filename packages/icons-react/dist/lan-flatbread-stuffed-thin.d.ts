import React from 'react';

export interface LanFlatbreadStuffedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlatbreadStuffedThin: React.FC<LanFlatbreadStuffedThinProps>;
export default LanFlatbreadStuffedThin;
