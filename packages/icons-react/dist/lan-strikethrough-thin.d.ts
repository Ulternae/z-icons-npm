import React from 'react';

export interface LanStrikethroughThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrikethroughThin: React.FC<LanStrikethroughThinProps>;
export default LanStrikethroughThin;
