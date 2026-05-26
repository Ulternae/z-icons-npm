import React from 'react';

export interface LanHeadSideCoughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideCough: React.FC<LanHeadSideCoughProps>;
export default LanHeadSideCough;
