import React from 'react';

export interface LanStarOfLifeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarOfLifeThin: React.FC<LanStarOfLifeThinProps>;
export default LanStarOfLifeThin;
