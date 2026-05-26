import React from 'react';

export interface LanExpandArrowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandArrows: React.FC<LanExpandArrowsProps>;
export default LanExpandArrows;
