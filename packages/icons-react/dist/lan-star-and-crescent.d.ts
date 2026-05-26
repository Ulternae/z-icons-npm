import React from 'react';

export interface LanStarAndCrescentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarAndCrescent: React.FC<LanStarAndCrescentProps>;
export default LanStarAndCrescent;
