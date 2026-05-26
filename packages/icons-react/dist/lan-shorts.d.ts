import React from 'react';

export interface LanShortsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShorts: React.FC<LanShortsProps>;
export default LanShorts;
