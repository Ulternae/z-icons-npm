import React from 'react';

export interface LanStarExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarExclamation: React.FC<LanStarExclamationProps>;
export default LanStarExclamation;
