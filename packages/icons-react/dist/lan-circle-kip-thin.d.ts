import React from 'react';

export interface LanCircleKipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleKipThin: React.FC<LanCircleKipThinProps>;
export default LanCircleKipThin;
