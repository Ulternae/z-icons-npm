import React from 'react';

export interface LanFlatbreadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlatbreadThin: React.FC<LanFlatbreadThinProps>;
export default LanFlatbreadThin;
